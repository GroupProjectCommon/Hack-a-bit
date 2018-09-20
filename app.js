// // Make the DIV element draggable:
// dragElement(document.getElementById("reactant-1"));
//
// function dragElement(elmnt) {
//     var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//     if (document.getElementById(elmnt.id + "header")) {
//         /* if present, the header is where you move the DIV from:*/
//         document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//     } else {
//         /* otherwise, move the DIV from anywhere inside the DIV:*/
//         elmnt.onmousedown = dragMouseDown;
//     }
//
//     function dragMouseDown(e) {
//         e = e || window.event;
//         e.preventDefault();
//         // get the mouse cursor position at startup:
//         pos3 = e.clientX;
//         pos4 = e.clientY;
//         document.onmouseup = closeDragElement;
//         // call a function whenever the cursor moves:
//         document.onmousemove = elementDrag;
//     }
//
//     function elementDrag(e) {
//         e = e || window.event;
//         e.preventDefault();
//         // calculate the new cursor position:
//         pos1 = pos3 - e.clientX;
//         pos2 = pos4 - e.clientY;
//         pos3 = e.clientX;
//         pos4 = e.clientY;
//         // set the element's new position:
//         elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//         elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//     }
//
//     function closeDragElement() {
//         /* stop moving when mouse button is released:*/
//         document.onmouseup = null;
//         document.onmousemove = null;
//     }
// }

var reactant1 = document.getElementById("reactant-1");
var reactant2 = document.getElementById("reactant-2");
var conicalflask = document.getElementById("conical-flask");

dragElement(reactant1);
dragElement(reactant2);
createSink(conicalflask);

function dragElement(element) {

    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    console.log(element.offsetTop, element.offsetLeft);

    element.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        // prevent any default stuff happening to the element
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;

        element.onmouseup = releasedrag;
        element.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;

        // drag the element
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        // set the positon of element
        element.style.left = element.offsetLeft - pos1 + "px";
        element.style.top = element.offsetTop - pos2 + "px";
    }

    function releasedrag() {
        element.onmouseup = null;
        element.onmousemove = null;
    }
}

function createSink(element) {
    if (element.onmouseenter && element.onmousedown) {
        sinkIt;
    }

    function sinkIt(e) {
        e = e || window.event;
        e.preventDefault();
    }
}

/**
 * Check if both reactants are in the conical-flask div and make product
 */
var rect = conicalflask.getBoundingClientRect();

/**
 * Run this 60 times a second
 */
setInterval(function () {
    console.log("checking for reaction");
    console.log(rect.left, rect.right, rect.top, rect.bottom);
    console.log("reactant 1 - " + reactant1.offsetTop + " -- " + reactant1.offsetLeft)
    console.log("reactant 2 - " + reactant2.offsetTop + " -- " + reactant2.offsetLeft)
    if ((reactant1.offsetTop > rect.top && reactant1.offsetTop < rect.bottom) &&
        (reactant2.offsetLeft > rect.left && reactant2.offsetLeft < rect.right)) {
        reactant1.style.display = "none";
        reactant2.style.display = "none";
        conicalflask.src = "assets/fire.png";
    }
}, 100);
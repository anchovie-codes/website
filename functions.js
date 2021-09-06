"use strict";

function hideRight() {
    var x = document.getElementById("toggle_left");
    var y = document.getElementById("toggle_right");
    if ( x.classList.contains("hidden") ) {
        y.classList.add("hidden");
        x.classList.remove("hidden");
    }
}

function hideLeft() {
    var x = document.getElementById("toggle_right");
    var y = document.getElementById("toggle_left");
    console.log(x.style.display);
    if ( x.classList.contains("hidden") ) {
        y.classList.add("hidden");
        x.classList.remove("hidden");
    }
}
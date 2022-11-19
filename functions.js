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

window.onload = function(){
    console.log("this function is running");
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
            content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
};
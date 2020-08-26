"use strict";
var element;
var startStamp;
// document.onload = () => {
//     rotate()
// }
window.onload = function () {
    rotate();
};
function rotate() {
    element = document.getElementById('animate');
    requestAnimationFrame(animate);
}
function animate(timestamp) {
    if (startStamp == undefined) {
        startStamp = timestamp;
    }
    var elapsed = timestamp - startStamp;
    console.log(elapsed);
    if (element != null) {
        element.style.transform = "rotate(" + 0.01 * elapsed + "deg)";
    }
    requestAnimationFrame(animate);
}

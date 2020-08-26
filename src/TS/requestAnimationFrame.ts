let element:HTMLElement | null
let startStamp: DOMHighResTimeStamp | undefined
// document.onload = () => {
//     rotate()
// }

window.onload = () => {
    rotate()
}

function rotate() {
    element = document.getElementById('animate')
    requestAnimationFrame(animate)
}

function animate(timestamp: DOMHighResTimeStamp) {
    if (startStamp == undefined) {
        startStamp = timestamp
    }
    const elapsed = timestamp - startStamp
    console.log(elapsed);
    if (element != null) {
        element.style.transform = `rotate(${0.01 * elapsed}deg)`
    }
    requestAnimationFrame(animate)
}
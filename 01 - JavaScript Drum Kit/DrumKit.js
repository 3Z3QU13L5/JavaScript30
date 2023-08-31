window.addEventListener("keydown", (event) => {
    console.log(event.keyCode)
    var buttonElement = getButton(event.keyCode)
    var soundElement = getSound(event.keyCode)
    console.log({ buttonElement, soundElement })

    buttonElement.classList.add("playing")
    soundElement.play();
})

window.addEventListener("keyup", (event) => {
    var buttonElement = getButton(event.keyCode)
    var soundElement = getSound(event.keyCode)

    buttonElement.classList.remove("playing")
    soundElement.pause();
    soundElement.currentTime = 0;
})

function getButton(dataKey) {
    var element = document.querySelector("div[data-key='" + dataKey + "']");
    return element;
}

function getSound(dataKey) {
    var element = document.querySelector("audio[data-key='" + dataKey + "']");
    return element;
}
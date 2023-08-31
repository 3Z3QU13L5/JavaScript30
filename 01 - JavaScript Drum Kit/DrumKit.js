window.addEventListener("keydown", (event) => {
    var buttonElement = getButton(event.keyCode);
    var soundElement = getSound(event.keyCode);

    if (buttonElement == null) {
        console.log("That wasn't a key from the Drum")
    } else {
        buttonElement.classList.add("playing")
        soundElement.play();
    }
})

window.addEventListener("keyup", (event) => {
    var buttonElement = getButton(event.keyCode);
    var soundElement = getSound(event.keyCode);

    if (buttonElement == null) {
        console.log("That wasn't a key from the Drum")
    } else {
        buttonElement.classList.remove("playing")
        soundElement.pause();
        soundElement.currentTime = 0;
    }

})


function getButton(dataKey) {
    var element = document.querySelector("div[data-key='" + dataKey + "']");
    console.log(element)
    return element;
}

function getSound(dataKey) {
    var element = document.querySelector("audio[data-key='" + dataKey + "']");
    return element;
}
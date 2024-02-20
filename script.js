const colorPicker = document.querySelector("input[type='color']")

const updater = () => {
    document.body.style.backgroundColor = colorPicker.value
    document.getElementById("code").innerHTML = colorPicker.value
}

setInterval(updater,100)
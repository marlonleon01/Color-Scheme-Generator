const baseUrl = "https://www.thecolorapi.com/scheme"
const colorPicker = document.getElementById("choose-color")
const colorMode = document.getElementById("color-scheme-mode")
const getColorsBtn = document.getElementById("get-color-scheme-btn")
let scheme


/* Get Random Color on start */
const randomColor = Math.floor(Math.random() * 16777215)
colorPicker.value = "#" + randomColor.toString(16)

/* Display mode on select drop down */
const getColors = () => {
    fetch(`${baseUrl}?hex=${colorPicker.value.slice(1)}&mode=${colorMode.value}`)
        .then(res => res.json())
        .then(data => console.log(data))
}

const addColorSchemeMode = () => {
    Object.entries(scheme).forEach(

    )
}

getColorsBtn.addEventListener("click", () => getColors())
const baseUrl = "https://www.thecolorapi.com/scheme"
const colorPicker = document.getElementById("choose-color")
const colorMode = document.getElementById("color-scheme-mode")
const getColorsBtn = document.getElementById("get-color-scheme-btn")
const mainElement = document.getElementById("colors-holder")
let scheme


/* Get Random Color on start */
const randomColor = Math.floor(Math.random() * 16777215)
colorPicker.value = "#" + randomColor.toString(16)

/* Display mode on select drop down and retrieving colors */
const getColors = () => {
    fetch(`${baseUrl}?hex=${colorPicker.value.slice(1)}&mode=${colorMode.value}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.colors)
            renderColor(data.colors)
        })
}

getColors()
// const addColorSchemeMode = () => {
//     Object.entries(scheme).forEach(

//     )
// }

getColorsBtn.addEventListener("click", () => getColors())


/* render colors */

const renderColor = (colorsArray) => {
    mainElement.innerHTML = colorsArray.map(colors => {
        return `
                <div class="colors" style="background-color:${colors.hex.value}">
                    <p class="colors-hexcode-holder">${colors.hex.value}</p>
                </div>
            `
    }).join("")
}
const baseUrl = "https://www.thebaseUrl.com/scheme"
const colorPicker = document.getElementById("choose-color")

/* Get Random Color on start */
const randomColor = Math.floor(Math.random() * 16777215)
colorPicker.value = "#" + randomColor.toString(16)


// fetch(`${colorApi}?hex=0047AB`)
//     .then(res => res.json())
//     .then(data => console.log(data))
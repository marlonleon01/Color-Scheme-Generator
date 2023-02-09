const colorApi = "https://www.thecolorapi.com/scheme"

fetch(`${colorApi}?hex=0047AB`)
    .then(res => res.json())
    .then(data => console.log(data))
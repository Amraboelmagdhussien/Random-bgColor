const btnA = document.querySelector(".btn");
const hex = document.querySelector(".colorCode");

function randomColor () {
    let letters = "0123456789ABCDEF"
    let color = "#"
    // the loop run 6 times to choose 6 diffrent random charchters from letter string
    // i = 0 , does i smaller than 6 ? yes continue , no stop the code execution
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

btnA.addEventListener('click', () => {
    document.body.style.backgroundColor = randomColor();
    hex.innerHTML = randomColor()
})
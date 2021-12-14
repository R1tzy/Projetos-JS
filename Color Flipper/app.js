const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]

const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click",clicar)

function clicar(){
    let randomNumber = getRandomNumber(0, 4)
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
}

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}


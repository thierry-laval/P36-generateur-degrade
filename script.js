const range = document.querySelector('input[type="range"]')
const angleGradiant = document.querySelector('.angle-gradient')
const colorOne = document.querySelector('input[type="color"]:nth-child(1)')
const colorTwo = document.querySelector('input[type="color"]:nth-child(2)')
const body = document.querySelector('body')

const btnCopy = document.querySelector(".btn-copy")

let gradient = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 100%)"

console.log(colorTwo.value);

range.addEventListener("change", () => {
    angleGradiant.innerText = range.value + "°"
    gradient = `linear-gradient(${range.value}deg, ${colorOne.value} 0%, ${colorTwo.value} 100%)`
    body.style.background = gradient

})

colorOne.addEventListener("change", () => {
    console.log(colorOne.value);
    gradient = `linear-gradient(${range.value}deg, ${colorOne.value} 0%, ${colorTwo.value} 100%)`
    body.style.background = gradient
    colorOne.style.background = colorOne.value
})

colorTwo.addEventListener("change", () => {
    console.log(colorTwo.value);
    gradient = `linear-gradient(${range.value}deg, ${colorOne.value} 0%, ${colorTwo.value} 100%)`
    body.style.background = gradient
    colorTwo.style.background = colorTwo.value
})

btnCopy.addEventListener("click", () => {
    btnCopy.innerText = "Code CSS copié !"
    window.setTimeout(() => {
        btnCopy.innerText = "Copier !"
    }, 1000)
    
    navigator.clipboard.writeText("background: " + gradient)
})


// background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 100%);
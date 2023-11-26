

// background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 100%);

const range = document.querySelector('input[type="range"]');
const colorOne = document.querySelector('input[type="color"]:nth-child(1)');
const colorTwo = document.querySelector('input[type="color"]:nth-child(2)');
const body = document.querySelector('body');

range.addEventListener("change", () => {
    body.style.background = `linear-gradient(${range.value}deg, ${colorOne.value}, ${colorTwo.value})`;
});

colorOne.addEventListener("change", () => {
    body.style.background = `linear-gradient(${range.value}deg, ${colorOne.value}, ${colorTwo.value})`;
});

colorTwo.addEventListener("change", () => {
    body.style.background = `linear-gradient(${range.value}deg, ${colorOne.value}, ${colorTwo.value})`;
});
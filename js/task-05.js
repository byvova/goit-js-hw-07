function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.log(getRandomHexColor())

const btn = document.querySelector('.change-color')
const span = document.querySelector('.color')
const body = document.body


btn.addEventListener('click', (button) => { 
  const color = getRandomHexColor()
  console.log(color)
  body.style.background = color
  span.textContent = color
})
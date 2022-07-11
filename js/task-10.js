function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divControls = document.querySelector('#controls')
const createBtn = divControls.querySelector('[data-create]')
const destroyBtn = divControls.querySelector('[data-destroy]')
const inputEl = divControls.querySelector('input[type="number"]')
const boxesMarkup = document.querySelector('#boxes')

createBtn.addEventListener('click', () => createBoxes(inputEl.value))

let boxWidth = 30
let boxHeight = 30

function createBoxes(amount) {
  let markupArr = []
  for (let i = Number(inputEl.min); i <= amount; i += Number(inputEl.step)) {
    const boxMarkup = `<div style="width:${boxWidth}px; height:${boxHeight}px; background-color:${getRandomHexColor()}"></div>`
    boxWidth += 10
    boxHeight += 10

    markupArr.push(boxMarkup)
  }
  boxesMarkup.insertAdjacentHTML('beforeend', markupArr.join(''))
}
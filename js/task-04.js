const buttonEncrementEl = document.querySelector('button[data-action="increment"]')
const buttonDecrementEl = document.querySelector('button[data-action="decrement"]')
const spanEl = document.querySelector('#value')

let value = 0
function onEncrement(event) {
  value += 1
  spanEl.textContent = value
}
buttonEncrementEl.addEventListener('click', onEncrement)


function onDecrement(event) {
  value -= 1
  spanEl.textContent = value
}
buttonDecrementEl.addEventListener('click', onDecrement)
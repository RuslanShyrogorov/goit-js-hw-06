const inputEl = document.querySelector('#font-size-control')
const spanEl = document.querySelector('#text')

function changeFontSize(event) {
  spanEl.style.fontSize = parseInt(inputEl.value) + 'px'
}

inputEl.addEventListener('input', changeFontSize)
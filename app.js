const buttonStart = document.querySelector('.button-init-counter')
const buttonStop = document.querySelector('.button-stop-counter')
const counterContainer = document.querySelector('.counter-container')

let timer = null

const incrementCounter = () => {
  const incrementedCounter = Number(counterContainer.textContent) + 1
  counterContainer.textContent = incrementedCounter
}
const stopCounter = () => {
  clearInterval(timer)
  counterContainer.textContent = 0
}

buttonStart.addEventListener('click', () => {
  timer = setInterval(incrementCounter, 1000)
})
buttonStop.addEventListener('click', () => stopCounter())
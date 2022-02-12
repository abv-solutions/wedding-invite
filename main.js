const countdown = document.querySelector('.countdown')
const refuseButton = document.querySelector('.btn-secondary')
const nameInput = document.querySelector('[name="name"]')
const hiddenInput = document.querySelector('[name="response"]')

const launchDate = new Date('Jul 16, 2022, 11:20:00').getTime()

const interval = setInterval(() => {
	const now = new Date().getTime()
	const distance = launchDate - now
	const days = Math.floor(distance / (1000 * 60 * 60 * 24))
	const hours = Math.floor(
		(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	)
	const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
	const seconds = Math.floor((distance % (1000 * 60)) / 1000)
	countdown.innerHTML = `
    <div>${days}<span>zile</span></div>
    <div>${hours}<span>ore</span></div>
    <div>${mins}<span>min</span></div>
    <div>${seconds}<span>sec</span></div>
  `
	if (distance < 0) {
		clearInterval(interval)
		countdown.style.color = '#399c11'
		countdown.style.fontWeight = 'bold'
		countdown.innerHTML = 'Launched!'
	}
}, 1000)

refuseButton.addEventListener('click', changeResponse)

function changeResponse() {
	if (nameInput.value) {
		hiddenInput.value = 'Refuse'
		console.log(refuseButton, hiddenInput, nameInput)
	}
}

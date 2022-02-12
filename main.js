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

function initMap() {
	const parc = { lat: 46.7686686, lng: 23.5774453 }
	const wonderlandP = { lat: 46.720763, lng: 23.590652 }
	const wonderlandS = { lat: 46.719931, lng: 23.589226 }

	const map1 = new google.maps.Map(document.getElementById('map1'), {
		zoom: 15,
		center: parc,
	})
	const map2 = new google.maps.Map(document.getElementById('map2'), {
		zoom: 16,
		center: wonderlandP,
	})
	const map3 = new google.maps.Map(document.getElementById('map3'), {
		zoom: 14,
		center: wonderlandS,
	})

	const parkMarker = new google.maps.Marker({
		position: parc,
		map: map1,
		title: 'Parcul Central',
	})
	const wonderlandPMarker = new google.maps.Marker({
		position: wonderlandP,
		map: map2,
		title: 'Ponton Wonderland',
	})
	const wonderlandSMarker = new google.maps.Marker({
		position: wonderlandS,
		map: map3,
		title: 'Orhideea Wonderland',
	})

	google.maps.event.addListener(parkMarker, 'click', function () {
		window.open('https://goo.gl/maps/FSzCg8rEChMJqFJL8', '_blank')
	})
	google.maps.event.addListener(wonderlandPMarker, 'click', function () {
		window.open(
			"https://www.google.com/maps/place/46%C2%B043'14.8%22N+23%C2%B035'26.4%22E",
			'_blank'
		)
	})
	google.maps.event.addListener(wonderlandSMarker, 'click', function () {
		window.open(
			"https://www.google.com/maps/place/46%C2%B043'11.8%22N+23%C2%B035'21.2%22E/",
			'_blank'
		)
	})
}

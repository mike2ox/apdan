// router
const {
	initialRoutes,
	historyRouterPush,
	hashRouterPush
} = require('./router')

const historyDiv = document.querySelector('#history-content')
const hashDiv = document.querySelector('#hash-content')

// initialize route setup
initialRoutes('history', historyDiv)
initialRoutes('hash', hashDiv)

window.onload = () => {
	const historyButtons = document.querySelectorAll('button.history')
	const hashButtons = document.querySelectorAll('button.hash')

	historyButtons.forEach(el => {
		el.addEventListener('click', (event) => {
			const path = event.target.getAttribute('route')
			historyRouterPush(path, historyDiv)
		})
	})

	hashButtons.forEach(el => {
		el.addEventListener('click', (event) => {
			const path = event.target.getAttribute('route')
			hashRouterPush(path, hashDiv)
		})
	})
}

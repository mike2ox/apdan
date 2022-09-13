// 변화가 필요한 부분만 routing으로 관리
// 컴포넌트의 탄생배경
const routes = {
	'/': `<div class="page">
  <h1>About Page</h1>
</div>
`,
	'/home': `<div class="page">
  <h1>Home Page</h1>
</div>
`,
	'/about': `<div class="page">
  <h1>About Page</h1>
</div>
`
}

// entry point
function initialRoutes(mode, el) {
	el.innerHTML = routes['/']
	if (mode === 'history') {
		// 현재 history가 바뀔때 동작하는 이벤트
		window.onpopstate = () => {
			el.innerHTML = routes[window.location.pathname]
		}
	} else if (mode === 'hash') {
		// URL상 있는 hash값이 변경될 때 동작
		window.addEventListener('hashchange', () => {
			el.innerHTML = getHashRoute()
		})
	}
}

// set browser history
function historyRouterPush(path, el) {
	console.log(path);
	console.log(window.location.path)
	if (path !== window.location.pathname) {
		window.history.pushState({}, path, window.location.origin + path)
		el.innerHTML = routes[path];
	}
}

// get hash history route
function getHashRoute() {
	let route = '/'

	Object.keys(routes).forEach(hashRoute => {
		if (window.location.hash.replace('#', '') === hashRoute.replace('/', '')) {
			route = routes[hashRoute]
		}
	})

	return route
}

// set hash history
function hashRouterPush(_, el) {
	el.innerHTML = getHashRoute()
}

module.exports = {
	initialRoutes,
	historyRouterPush,
	hashRouterPush
}

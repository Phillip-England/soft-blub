/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { Banner } from "./component/Banner";
import { LoginForm } from "./component/LoginForm";

// pulling in our application IDs and class names
// import { bannerBarsIconID, bannerXIconID, navMenuID, navOverlayID, TopBarID } from "../config/dom"


//=======================================================
// CLIENT-SIDE ROUTER
//=======================================================

// a type to represent our client-side router
type Router = {
	[path: string]: () => void;
}

// our applications routes
const router: Router = {
	"/": () => {loginPage()},
	"/vision": () => {visionPage()},
	"/score/cem": () => {cemPage()},
	"/score/sales": () => {salesPage()},
	"/score/talent": () => {talentPage()},
	"/score/finance": () => {financePage()},
}

//=======================================================
// CONTROLLER FUNCTIONS FOR EACH ROUTE
//=======================================================

const loginPage = () => {
	let banner = new Banner()
	toggleNavMenu(banner)
	let loginForm = new LoginForm()
	console.log(banner)
	console.log(loginForm)
}

const visionPage = () => {
	let banner = new Banner()
	toggleNavMenu(banner)
	console.log(banner)
}

const cemPage = () => {
	let banner = new Banner()
	toggleNavMenu(banner)
	console.log(banner)
}

const salesPage = () => {
	let banner = new Banner()
	toggleNavMenu(banner)
	console.log(banner)
}

const talentPage = () => {
	let banner = new Banner()
	toggleNavMenu(banner)
	console.log(banner)
}

const financePage = () => {
	let banner = new Banner()
	toggleNavMenu(banner)
	console.log(banner)
}

//=======================================================
// EVENT HANDLERS
//=======================================================

const toggleNavMenu = (banner: Banner) => {
	banner.bars.addEventListener('click', () => {
		banner.bars.classList.toggle('hidden')
		banner.menu.classList.toggle('hidden')
		banner.x.classList.toggle('hidden')
		banner.overlay.classList.toggle('hidden')
	})
	banner.x.addEventListener('click', () => {
		banner.bars.classList.toggle('hidden')
		banner.menu.classList.toggle('hidden')
		banner.x.classList.toggle('hidden')
		banner.overlay.classList.toggle('hidden')
	})
	banner.overlay.addEventListener('click', () => {
		banner.bars.classList.toggle('hidden')
		banner.menu.classList.toggle('hidden')
		banner.x.classList.toggle('hidden')
		banner.overlay.classList.toggle('hidden')
	})
}

//=======================================================
// CLIENT-SIDE ENTRY-POINT
//=======================================================

// executing our route function
const routeFunc = router[window.location.pathname]
routeFunc()
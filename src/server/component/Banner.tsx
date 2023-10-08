/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { NavLink } from "./NavLink"


type BannerProps = {
	path: string
}

export const Banner = ({path}: BannerProps): JSX.Element => {
	const topbarID = 'banner-top-bar'
	const barsID = 'banner-bars-icon'
	const xID = 'banner-x-icon'
	const menuID = 'nav-menu'
	const overlayID = 'overlay'
	return (
		<>		
			<div id={topbarID} class='p-6 text-lg bg-darkgray flex flex-row justify-between text-white fixed h-20 w-full top-0 z-40'>
				<h1 class='text-xl font-serif'>CFA Suite</h1>
				<div class='flex items-center text-white'>
					<div id={barsID}>
						<i class='fa-solid fa-bars fa-lg self-center'></i>
					</div>
					<div class='hidden' id={xID}>
						<i class='fa-solid fa-x fa-lg'></i>
					</div>
				</div>
			</div>
			<div class='h-20 bg-white'></div>
			<nav id={menuID} class={`hidden w-3/5 h-full fixed left-0 bg-darkgray z-40`}>
				<ul class='flex flex-col w-full p-2'>
					<li class='flex mb-2'>
						<NavLink path={path} text="Vision & Values" href='/vision' />
					</li>
					<li class='flex mb-2'>
						<NavLink path={path} text="Customer Service" href='/score/cem' />
					</li>
					<li class='flex mb-2'>
						<NavLink path={path} text="Talent" href='/score/talent' />
					</li>
					<li class='flex mb-2'>
						<NavLink path={path} text="Sales & Brand Growth" href='/score/sales' />
					</li>
					<li class='flex mb-2'>
						<NavLink path={path} text="Financial Stewardship" href='/score/finance' />
					</li>
				</ul>
			</nav>
			<div id={overlayID} class={`bg-black opacity-50 hidden absolute top-0 h-screen w-screen z-30`}></div>
		</>
	)
}


const hydrate = () => {
	document.getElementById('yo')
}

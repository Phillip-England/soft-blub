type NavLinkProps = {
	text: string
	path: string
	href: string
}

export const NavLink = ({text, path, href}: NavLinkProps): JSX.Element => {
	if (href == path) {
		return (
			<a class='p-6 text-white w-full bg-red rounded' href={href}>{text}</a>
		)
	}
	return (
		<a class='p-6 text-white w-full rounded bg-gray' href={href}>{text}</a>
	)
}
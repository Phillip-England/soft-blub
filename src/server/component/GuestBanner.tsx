
type GuestBannerProps = {
	path: string
}

export const GuestBanner = ({path}: GuestBannerProps): JSX.Element => {
	return (
		<>		
			<div class='p-6 bg-darkgray flex flex-row justify-between text-white fixed h-20 w-full top-0 z-40'>
				<h1 class='text-xl font-serif'>CFA Suite</h1>
			</div>
			<div class='h-20 bg-white'></div>
		</>
	)
}
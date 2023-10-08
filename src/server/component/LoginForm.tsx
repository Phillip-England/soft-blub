



export const LoginForm = (): JSX.Element => {
	const loaderID = 'login-form-loader'
	const submitID = 'login-form-submit'
	const formID = 'login-form'
	return (
		<form id={formID} class='bg-darkgray m-2 p-6 rounded flex flex-col'>
			<h2 class='text-xl font-serif mb-4'>Login</h2>
			<label class='text-xs mb-2'>username</label>
			<input type='text' class='mb-4 rounded text-xs bg-gray p-2 focus:outline-none focus:border focus:border-lightgray' />
			<label class='text-xs mb-2'>password</label>
			<input type='password' class='mb-6 text-xs rounded bg-gray p-2 focus:outline-none focus:border focus:border-lightgray' />
			<input id={submitID} type='submit' value="Login" class='px-6 text-sm py-2 rounded bg-red' />
			<div id={loaderID} class='flex justify-center hidden'>
				<div class='h-12 w-12 rounded-full border-gray border-t-red border-4 animate-spin'></div>
			</div>
		</form>
	)
}
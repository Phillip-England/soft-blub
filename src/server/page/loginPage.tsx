import { Context } from "elysia";
import { LoginForm } from "../component/LoginForm";
import { GuestLayout } from "../layout/GuestLayout";
import { Layout } from "../layout/Layout";




export const loginPage = (context: Context<{
    body: unknown;
    params: Record<never, string>;
    query: undefined;
    headers: undefined;
    response: unknown;
}, {}>) => {
	return (
		<Layout 
			title="Login | CFA Suite"
			path={context.path}
			children={
				<>
					<LoginForm />
				</>
			}	
		/>
	)
}
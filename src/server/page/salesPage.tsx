import { Context } from "elysia";
import { Layout } from "../layout/Layout";



export const salesPage = (context: Context<{
    body: unknown;
    params: Record<never, string>;
    query: undefined;
    headers: undefined;
    response: unknown;
}, {}>) => {
	return (
		<Layout 
			title="Sales & Brand Growth | CFA Suite"
			path={context.path}
			children={
				<>
				</>
			}	
		/>
	)
}
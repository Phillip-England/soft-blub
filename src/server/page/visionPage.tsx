import { Context } from "elysia";
import { Layout } from "../layout/Layout";


export const visionPage = (context: Context<{
    body: unknown;
    params: Record<never, string>;
    query: undefined;
    headers: undefined;
    response: unknown;
}, {}>) => {
	return (
		<Layout 
			title="Vision & Values | CFA Suite"
			path={context.path}
			children={
				<>
				</>
			}	
		/>
	)
}
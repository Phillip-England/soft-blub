import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import { staticPlugin } from '@elysiajs/static'
import { initTailwindConfig } from '../config/tail'
import { loginPage } from './page/loginPage'
import { visionPage } from './page/visionPage'
import { cemPage } from './page/cemPage'
import { salesPage } from './page/salesPage'
import { talentPage } from './page/talentPage'
import { financePage } from './page/financePage'
import { buildClientComponents } from '../config/comp'

//=======================================================
// SERVER CONFIG
//=======================================================

const app = new Elysia()
app.use(html())
app.use(staticPlugin())
await initTailwindConfig()
buildClientComponents()

//=======================================================
// ROUTES
//=======================================================

app.get('/', (context) => {
	console.log(`path: ${context.path}`)
	return loginPage(context)
})

app.get('/vision', (context) => {
	console.log(`path: ${context.path}`)
	return visionPage(context)
})

app.get('/score/cem', (context) => {
	console.log(`path: ${context.path}`)
	return cemPage(context)
})

app.get('/score/sales', (context) => {
	console.log(`path: ${context.path}`)
	return salesPage(context)
})

app.get('/score/talent', (context) => {
	console.log(`path: ${context.path}`)
	return talentPage(context)
})

app.get('/score/finance', (context) => {
	console.log(`path: ${context.path}`)
	return financePage(context)
})

//=======================================================
// RUNNING
//=======================================================

app.listen(8080)

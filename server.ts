import { Application, Router } from 'https://deno.land/x/oak/mod.ts';

const app = new Application();
const router = new Router();

router.get('/', (ctx) => {
	ctx.response.body = 'Hello, Deno!';
});

router.get('/add-user', (ctx) => {
	ctx.response.body = 'Create a user';
});

app.use(router.routes());
console.log('Server running on http://localhost:3000');
await app.listen({ port: 3000 });

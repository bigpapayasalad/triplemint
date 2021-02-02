import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		imgRoot: '/img'
	}
});

export default app;
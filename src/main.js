import App from './App.svelte';
import { serve } from './mock/server';

import 'normalize.css';

if (process.env.DEV) {
  serve();
}

const app = new App({
  target: document.body,
});

export default app;

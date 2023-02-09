import { createApp } from 'vue';
import App from './App.vue';
import 'normalize.css';
import router from './router/router';

import '@/assets/css/index.css';
import store from './store';

const app = createApp(App);
app.use(router);
app.use(store)
app.mount('#app');

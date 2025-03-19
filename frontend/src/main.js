import { createApp } from 'vue';
import App from './App.vue';
import store from './stores/index';
import router from './router';
import './assets/css/root.css';
import './assets/css/base.css';
import './assets/css/style.css';

const app = createApp(App);
app.use(store);
app.use(router); // Убедитесь, что маршрутизатор подключён
app.mount('#app');
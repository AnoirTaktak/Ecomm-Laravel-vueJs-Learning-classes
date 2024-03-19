import { createApp } from 'vue';
import { createRouter, createWebHashHistory,createWebHistory } from "vue-router";
import { routes } from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './app.vue'
import "@fortawesome/fontawesome-free/css/all.css";
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-green/theme.css';
import store from "./store";

let app = createApp(App)
const router = createRouter({
history: createWebHistory(),
routes: routes,
})
app.use(router);
app.use(PrimeVue);
app.use(store);
app.mount("#app");

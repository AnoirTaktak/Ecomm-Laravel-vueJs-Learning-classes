import { createApp } from 'vue';
import { createRouter, createWebHashHistory,createWebHistory } from "vue-router";
import { routes } from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './app.vue'
import "@fortawesome/fontawesome-free/css/all.css";

let app = createApp(App)
const router = createRouter({
history: createWebHistory(),
routes: routes,
})
app.use(router);
app.mount("#app")

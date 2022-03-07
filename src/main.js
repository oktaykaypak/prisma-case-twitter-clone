import { createApp } from "vue";
import { createPinia } from "pinia";

import "@/@fake-db/db";
// import "./plugins/vue-composition-api";

import App from "./App.vue";
import router from "./router";
import "@/assets/styles/main.css";
import "@/assets/scss/app.scss";

// createApp(App).use(router).use(createPinia()).mount("#app");
const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount("#app");

import { createApp } from "vue";
import { createPinia } from "pinia";
import "@/@fake-db/db";

import App from "./App.vue";
import router from "./router";
import "@/assets/styles/main.css";
import "@/assets/scss/app.scss";

createApp(App).use(router).use(createPinia()).mount("#app");

import App from "./App.vue";
import "./bootstrap";
import router from "./Router.";
import { createApp } from "vue";

const app = createApp(App);

app.use(router).mount("#app");

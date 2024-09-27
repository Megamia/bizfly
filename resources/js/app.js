import App from "./App.vue";
import "./bootstrap";
import router from "./Router.";
import { createApp } from "vue";
import "ant-design-vue/dist/reset.css";
import { Row, Col } from "ant-design-vue";

const app = createApp(App);

app.use(router).use(Row).use(Col).mount("#app");

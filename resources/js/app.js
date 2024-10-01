import App from "./App.vue";
import "./bootstrap";
import router from "./Router.";
import { createApp } from "vue";
import "ant-design-vue/dist/reset.css";
import {
    Row,
    Col,
    Dropdown,
    Button,
    Menu,
    Anchor,
    Steps,
    Space,
    Form,
    Input,
    Checkbox,
    DatePicker,
    Radio
} from "ant-design-vue";

const app = createApp(App);

app.use(router)
    .use(Row)
    .use(Col)
    .use(Dropdown)
    .use(Button)
    .use(Menu)
    .use(Anchor)
    .use(Steps)
    .use(Space)
    .use(Form)
    .use(Input)
    .use(Checkbox)
    .use(DatePicker)
    .use(Radio)
    .mount("#app");

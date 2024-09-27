import { createRouter, createWebHistory } from "vue-router";
import Home from "./Pages/Home.vue";
import Test from "./Pages/Test.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: Home, name: "Home" },
        { path: "/test", components: Test, name: "Test" },
    ],
});
export default router;

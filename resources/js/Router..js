import { createRouter, createWebHistory } from "vue-router";
import Home from "./Pages/Home.vue";
import Test from "./Pages/Test.vue";
import Add_new_program from "./Components/Add_new_program.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: Add_new_program, name: "Add_new_program" },
        { path: "/test", components: Test, name: "Test" },
        // { path: "/Add_new_program", components: Add_new_program, name: "Add_new_program" },
    ],
});
export default router;

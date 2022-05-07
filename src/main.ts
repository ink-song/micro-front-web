import { createApp } from "vue";
import App from "./App.vue";
import router from "@/route";
import antd from "@/lib/ant";
createApp(App).use(router).use(antd).mount("#app");
import startQiankun from "./mirco";
startQiankun();

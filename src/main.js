import { createApp } from "vue";
import { createPinia } from "pinia";
import { MotionPlugin } from "@vueuse/motion";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import App from "./App.vue";
import "virtual:windi.css";

const app = createApp(App);

app.use(createPinia());
app.use(MotionPlugin);
app.use(autoAnimatePlugin);
app.mount("#app");

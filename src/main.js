import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

// plugin--------------------------->
import { createPinia } from "pinia";
import router from "./router";
import "./assets/css/style.css";

// prime vue
import PrimeVue from "primevue/config";
import "primeflex/primeflex.css";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
app.use(PrimeVue);
// import component prime vue
import { primevueComponent } from "./plugins/primevue.js";
primevueComponent(app);

app.use(createPinia());

app.use(router);
app.mount("#app");

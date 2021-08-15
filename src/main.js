import "./assets/style.scss";

import { createApp } from "vue";
import { router } from "./router";
import App from "./App.vue";
import { metaEnv } from "./MetaEnv";

const app = createApp(App);
app.use(router);
app.mount("#app");

const ghPagePath = sessionStorage.getItem("ghPagePath");
if (ghPagePath) {
  sessionStorage.removeItem("ghPagePath");
  router.push(ghPagePath.replace(metaEnv.baseUrl, "/"));
}

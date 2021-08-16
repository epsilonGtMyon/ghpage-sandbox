import { createRouter, createWebHistory } from "vue-router";
import NormalLayout from "../layout/normal/NormalLayout.vue";
import { metaEnv } from "../MetaEnv";

import Home from "../views/home/Home.vue";
import Sandbox01 from "../views/sandbox01/Sandbox01.vue";
import Sandbox02 from "../views/sandbox02/Sandbox02.vue";
import HeightSandbox from "../views/heightsandbox/HeightSandbox.vue";
import SeirekiWareki from "../views/seirekiwareki/SeirekiWareki.vue";
import WarekiSeireki from "../views/warekiseireki/WarekiSeireki.vue";

const routes = [
  {
    path: "",
    redirect : "/n"
  },
  {
    path: "/n",
    name: "NormalLayout",
    component: NormalLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "sandbox01",
        name: "Sandbox01",
        component: Sandbox01,
      },
      {
        path: "sandbox02",
        name: "Sandbox02",
        component: Sandbox02,
      },
      {
        path: "heightsandbox",
        name: "HeightSandbox",
        component: HeightSandbox,
      },

      {
        path: "seirekiwareki",
        name: "SeirekiWareki",
        component: SeirekiWareki,
      },
      {
        path: "warekiseireki",
        name: "WarekiSeireki",
        component: WarekiSeireki,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(metaEnv.baseUrl),
  routes,
});

export { router };

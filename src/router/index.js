import { createRouter, createWebHistory } from "vue-router";
import NormalLayout from "../layout/normal/NormalLayout.vue";

import Home from "../views/home/Home.vue";
import Sandbox01 from "../views/sandbox01/Sandbox01.vue";
import Sandbox02 from "../views/sandbox02/Sandbox02.vue";

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
    ],
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export { router };

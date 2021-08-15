<template>
  <div>
    <nav class="navbar is-primary is-fixed-top has-shadow">
      <div class="navbar-brand">
        <a
          role="button"
          class="navbar-burger is-always ml-0"
          :class="{'is-active': visibleSideMenu}"
          @click="showSideMenu"
          
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>

        <router-link class="navbar-item" to="/">Home</router-link>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start"></div>
        <div class="navbar-end"></div>
      </div>
    </nav>

    
    <aside class="appSideMenu menu" v-if="visibleSideMenu" ref="sideMenuRef">
      <p class="menu-label">
        メニュー
        <ul class="menu-list">
          <li><router-link to="/n/sandbox01">Sandbox01</router-link></li>
          <li><router-link to="/n/sandbox02">Sandbox02</router-link></li>
        </ul>
      </p>
    </aside>
    <template v-if="visibleSideMenu">
      <div class="is-overlay is-hidden-tablet" style="background-color: rgba(0, 0, 0, 0.2)"></div>
    </template>
    <router-view />
  </div>
</template>

<script>
import { onBeforeUnmount, onMounted, ref } from "vue";
export default {
  setup() {
    const visibleSideMenu = ref(false);
    const sideMenuRef = ref(null);

    const navbarClassName = "has-navbar-fixed-top";

    onMounted(() => {
      const html = document.querySelector("html");
      if (!html.classList.contains(navbarClassName)) {
        html.classList.add(navbarClassName);
      }
    });

    onBeforeUnmount(() => {
      const html = document.querySelector("html");
      html.classList.remove(navbarClassName);
    });

    const showSideMenu = (e) => {
      if (visibleSideMenu.value) {
        return;
      }
      visibleSideMenu.value = true;

      window.addEventListener("click", _clickedOutsideMenu);
      //windowに到達してしまうのを防ぐ
      e.stopPropagation();
    };

    const _clickedOutsideMenu = (e) => {
      console.log("_clickedOutsideMenu");
      const contains = sideMenuRef.value.contains(e.target);
      if (contains) {
        return;
      }
      visibleSideMenu.value = false;
      window.removeEventListener("click", _clickedOutsideMenu);
    };

    return {
      visibleSideMenu,
      sideMenuRef,
      showSideMenu,
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar-burger.is-always {
  //幅が広いと消させるので 打消し
  display: block !important;
  cursor: pointer;
}

.appSideMenu {
  position: fixed;
  top: 3.25rem;
  left: 0;
  bottom: 0;
  z-index: 30;
  background-color: white;

  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  min-width: 10em;
}
</style>
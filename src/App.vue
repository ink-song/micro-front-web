<template>
  <div>
    <a-config-provider>
      <section id="micro-main-app">
        <Menus :menus="menus"></Menus>
      </section>
      <section>
        <router-view v-if="router.getRoutes()" />
        <router-view v-else />
      </section>
    </a-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Menus from "@/components/menu.vue";

export default defineComponent({
  name: "App",
  components: { Menus },
  setup() {
    const router = useRouter();
    console.log(router, router.getRoutes());
    const menus = [
      {
        key: "Home",
        title: "主页",
        path: "/",
      },
      {
        key: "VueMicroApp",
        title: "Vue 主页",
        path: "/vue",
      },
      {
        key: "VueMicroAppList",
        title: "Vue 列表页",
        path: "/vue/list",
      },
    ];
    return {
      menus,
      router,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

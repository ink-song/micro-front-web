<template>
  <section class="cns-main-menu">
    <a-menu mode="inline" theme="dark" :selectedKeys="[selectKey]">
      <a-menu-item
        v-for="item in menus"
        :key="item.key"
        @click="changeMenu(item)"
      >
        <router-link :to="{ path: item.path }">
          <a-icon v-if="item.icon" :type="item.icon" />
          <span>{{ item.title }}</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </section>
</template>

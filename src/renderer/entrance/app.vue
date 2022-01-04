<template>
    <!-- <menu-common v-show="route.path.indexOf('/desk') == -1 && route.path.indexOf('/chat') == -1"/> -->
    <transition name="fade" mode="out-in">
        <router-view />
    </transition>
    <!-- <section id="container"></section> -->
</template>
<style lang="scss">
#app {
  display: flex;
}
#container {
  display: block;
  flex: 1;
  height: 100%;
}
</style>
<script src="./index.ts" />
<template>
    <transition name="fade" mode="out-in">
        <router-view />
    </transition>
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
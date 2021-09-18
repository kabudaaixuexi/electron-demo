<template>
  <el-config-provider :i18n="i18nt">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </el-config-provider>
</template>
<style lang="scss">

</style>
<script src="./index.ts" />
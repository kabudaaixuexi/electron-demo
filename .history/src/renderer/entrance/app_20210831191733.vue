<template>
  <el-config-provider :i18n="i18nt">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </el-config-provider>
</template>

<script src="./index.ts" />

<style>
</style>
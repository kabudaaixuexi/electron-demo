<template>
  <section class="menu-common">
    <el-menu
      default-active="/"
      class="el-menu-vertical-demo"
      :collapse="false"
      router
    >
      <el-menu-item index="/">
        <el-icon><icon-menu /></el-icon>
        <template #title>默认</template>
      </el-menu-item>
      <el-menu-item index="/desk">
        <el-icon><icon-menu /></el-icon>
        <template #title>桌面模式</template>
      </el-menu-item>
      <el-menu-item index="/basesub/sub-react">
        <el-icon><document /></el-icon>
        <template #title>sub-react</template>
      </el-menu-item>
      <el-menu-item index="/basesub/sub-react2">
        <el-icon><setting /></el-icon>
        <template #title>sub-react2</template>
      </el-menu-item>
    </el-menu>
  </section>
</template>

<script src="./index.ts" />

<style lang="scss">
.menu-common {
    width: 200px;
    min-height: 100%;
    background: #fff;
}
</style>

<template>
  <section class="menu-common">
    <article class="menu-common-change">
      <!-- <div  @click="menuChange">{{open? '展开':'收起'}}</div> -->
      <div @click="RouterTo('/desk')">{{open? '':'桌面模式'}}</div>
    </article>
    <el-menu
      default-active="/"
      class="el-menu-vertical-demo"
      :collapse="open"
      router
    >
      <el-menu-item index="/">
        <el-icon><icon-menu /></el-icon>
        <template #title>默认</template>
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
    min-height: 100%;
    background: #fff;
    .menu-common-change {
      width: auto;
      font-size: 12px;
      font-family:Georgia, 'Times New Roman', Times, serif;
      padding:0 6px;
      height: 50px;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      div {
        padding: 1px 3px 3px;
        opacity: 1;
        transition-property: opacity; transition-duration:1s;
      }
      div:nth-of-type(1) {
        border-radius: 4px;
        color: rgb(65, 88, 17);
        background: rgb(203, 232, 233);
      }
    }
}
</style>

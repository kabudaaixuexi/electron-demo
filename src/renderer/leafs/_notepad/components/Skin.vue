<template>
  <article class="notepad_header_skin">
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        <svg
          t="1650130666968"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2400"
          width="23"
          height="23"
        >
          <path
            d="M772.8 96v64l163.2 161.6-91.2 91.2c-12.8-11.2-27.2-16-43.2-16-36.8 0-65.6 28.8-65.6 65.6V800c0 35.2-28.8 64-64 64H352c-35.2 0-64-28.8-64-64V462.4c0-36.8-28.8-65.6-65.6-65.6-16 0-32 6.4-43.2 16l-91.2-91.2L249.6 160h40l1.6 1.6C336 228.8 420.8 272 512 272c91.2 0 176-41.6 220.8-110.4 0-1.6 1.6-1.6 1.6-1.6h38.4V96M291.2 96H256c-22.4 0-38.4 6.4-49.6 19.2L43.2 276.8c-25.6 25.6-25.6 65.6 0 89.6l94.4 94.4c11.2 11.2 27.2 17.6 41.6 17.6s30.4-6.4 41.6-17.6h1.6c1.6 0 1.6 0 1.6 1.6V800c0 70.4 57.6 128 128 128h320c70.4 0 128-57.6 128-128V462.4c0-1.6 0-1.6 1.6-1.6h1.6c11.2 11.2 27.2 17.6 41.6 17.6 16 0 30.4-6.4 41.6-17.6l94.4-94.4c25.6-25.6 25.6-65.6 0-89.6L819.2 115.2c-12.8-12.8-28.8-19.2-46.4-19.2h-40c-22.4 0-41.6 11.2-54.4 30.4-33.6 49.6-96 81.6-168 81.6s-134.4-33.6-168-81.6C332.8 107.2 312 96 291.2 96z"
            fill="#ffffff"
            p-id="2401"
          ></path>
        </svg>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <!-- 是否仅粘贴文本 -->
          <el-dropdown-item style="padding-bottom: 16px">
            <div @click="handleChangeStyle('default')" class="box default-theme">默认</div>
          </el-dropdown-item>
          <!-- 颜色编辑对象 -->
          <el-dropdown-item style="padding-bottom: 16px">
            <div @click="handleChangeStyle('sky')" class="box sky-theme">天空</div>
          </el-dropdown-item>
          <!-- 文件存储位置 -->
          <el-dropdown-item style="padding-bottom: 16px">
            <div @click="handleChangeStyle('hot')" class="box hot-theme">火焰</div>
          </el-dropdown-item>
          <!-- 动画控制 -->
          <el-dropdown-item style="padding-bottom: 16px">
            <div @click="handleChangeStyle('yummy')" class="box yummy-theme">食欲</div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </article>
</template>

<script>
import { defineComponent, onMounted, onUnmounted, reactive, toRefs } from "vue";
import moon from "@renderer/store";
export default defineComponent({
  name: "skin",
  props: {},
  setup(props, context) {
    const state = reactive({
    });
    const handleChangeStyle = (e) => {
      moon.setState(e, "themeStyle");
    };
    onMounted(() => {});
    onUnmounted(() => {});
    return {
      ...toRefs(state),
      handleChangeStyle
    };
  },
});
</script>

<style lang="scss">
@import "@renderer/styles/style.scss";
.notepad_header_skin {
  @extend %Flex-Center-Start;
  padding-left: 66px;
  svg {
    @include BR(3px);
    transition: 0.35s;
    box-sizing: content-box;
    opacity: 0.8;
    padding: 3px;
    margin-right: 12px;
    &:hover {
      opacity: 1;
      background: $color-default-derived-06;
    }
  }
  .icon {
    color: aliceblue;
    // background: aliceblue;
  }
}
.el-dropdown-menu {
  max-height: 500px !important;
  overflow-y: auto;
  .box {
      height: 36px;
      display: grid;
      font-size: 12px;
      @include BR(3px);
      place-content: center;
      color: #fff;
      min-width: 100px;
  }
}
</style>

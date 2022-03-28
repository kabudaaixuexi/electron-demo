<template>
	<article class="notepad_header_translate">
        <el-dropdown trigger="click">
            <span class="el-dropdown-link">
                <svg t="1648467618458" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1173" width="24" height="24"><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m0-960C265.6 64 64 265.6 64 512s201.6 448 448 448 448-201.6 448-448S758.4 64 512 64z m268.8 422.4c-60.8-6.4-118.4-22.4-169.6-51.2-54.4 25.6-115.2 44.8-172.8 57.6l-28.8-51.2c51.2-9.6 102.4-25.6 150.4-44.8-32-28.8-57.6-64-70.4-105.6H448V240h304v51.2c-19.2 44.8-48 83.2-86.4 112 44.8 16 89.6 28.8 134.4 32l-19.2 51.2z m-92.8-192H544c16 32 38.4 57.6 67.2 76.8 28.8-19.2 57.6-44.8 76.8-76.8zM265.6 265.6L307.2 224c38.4 28.8 70.4 57.6 102.4 92.8l-41.6 41.6c-28.8-35.2-64-67.2-102.4-92.8z m99.2 396.8c16-16 32-35.2 51.2-54.4l16 64c-35.2 38.4-73.6 76.8-115.2 108.8l-22.4-54.4c9.6-9.6 16-22.4 16-35.2v-227.2H224v-57.6h140.8v256z m214.4-83.2h-112v-54.4h112v-51.2h57.6v51.2h121.6v54.4h-121.6V640h150.4v57.6h-150.4V800h-57.6v-102.4h-137.6V640h137.6v-60.8z" p-id="1174"></path></svg>
            </span>
            <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item @click="handleTranslate(value)" v-for="([key, value]) in Object.entries(langs)" :key="value">
                    <!-- 翻译类型 -->
                    <span class="notepad_header_translate__item">
                        {{key}}
                    </span>
                </el-dropdown-item>
            </el-dropdown-menu>
            </template>
        </el-dropdown>
            <!-- <svg t="1642429187757" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10613" width="24" height="24"><path d="M490.666667 810.666667C315.733333 810.666667 170.666667 665.6 170.666667 490.666667S315.733333 170.666667 490.666667 170.666667 810.666667 315.733333 810.666667 490.666667 665.6 810.666667 490.666667 810.666667z m0-42.666667c153.6 0 277.333333-123.733333 277.333333-277.333333S644.266667 213.333333 490.666667 213.333333 213.333333 337.066667 213.333333 490.666667 337.066667 768 490.666667 768z m264.533333-42.666667l119.466667 119.466667-29.866667 29.866667-119.466667-119.466667 29.866667-29.866667z" fill="#ffffff" p-id="10614"></path></svg> -->
    </article>
</template>

<script>
import {
  defineComponent,
  onMounted,
  onUnmounted,
  reactive,
  toRefs,
} from "vue";
import API from '@renderer/api'
import { langs } from '@renderer/api/type'
import { ElNotification } from 'element-plus'
export default defineComponent({
  name: 'translate',
  props: {
    content: String,
    onTranslate: Function
  },
  setup(props, context) {
    const state = reactive({
    })
    const handleTranslate = async (to) => {
        const { content = window.getSelection().toString(), onTranslate } = props
        const { data } = await API.getTranslate({
            content,
            to
        })
        if (!!data.trans_result) {
            onTranslate(data)
        } else {
            ElNotification({
                title: '翻译失败',
                message: '检查选中内容是否支持该语言翻译',
                type: 'error',
            })
        }
    }
    onMounted(() => {
    })
    onUnmounted(() => { 
    })
    return { 
      ...toRefs(state),langs,
      handleTranslate
    };
  }
});
</script>

<style lang="scss">
@import '@renderer/styles/style.scss';
.notepad_header_translate {
    @extend %Flex-Center-Start;
    padding-left: 50px;
        svg {
        @include BR(3px);
        transition: .35s;
        box-sizing: content-box;
        opacity: .9;
        padding: 3px;
        margin-right: 12px;
        &:hover {
            opacity: 1;
            background: $color-default-derived-06;
        }
    }
    
    .icon {
        color: aliceblue;
        background: aliceblue;
    }
}
.el-dropdown-menu {
    max-height: 500px !important;
    overflow-y: auto;
}
</style>

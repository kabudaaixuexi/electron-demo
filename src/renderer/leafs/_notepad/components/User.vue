<template>
	<article class="notepad_header_translate">
        <el-dropdown trigger="click">
           <img :src="userInfo?.photo || 'https://img2.baidu.com/it/u=3660282162,1838273748&fm=253&fmt=auto&app=138&f=PNG?w=275&h=275'" alt="">
            <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item>
                    <div class="notepad_header_translate__item">
                        <svg t="1650125492752" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3172" width="24" height="24"><path d="M432.56 527.168a150.192 150.192 0 0 1-73.6-129.248V342.24a150.256 150.256 0 0 1 300.512 0v55.664a150.176 150.176 0 0 1-72.048 128.32A344.432 344.432 0 0 1 824.736 718.4c2.56 5.552 7.232 11.2 7.232 16.928v4.784H832V829.92a16 16 0 0 1-16 16H208a16 16 0 0 1-16-16V749.904l0.32-0.032c0-5.28-0.032-10.656 0.336-16.096 0.368-5.408 4.416-10.608 6.8-15.792a344.432 344.432 0 0 1 233.104-190.816zM240 744.928v52.992h544v-53.008a296.16 296.16 0 0 0-544 0zM509.216 240a102.256 102.256 0 0 0-102.256 102.256v55.664a102.256 102.256 0 0 0 204.512 0V342.24A102.256 102.256 0 0 0 509.232 240z" p-id="3173" fill="#707070"></path></svg>
                        <span>{{userInfo?.userName}}</span>
                    </div>
                </el-dropdown-item>
                <el-dropdown-item>
                    <b style="color: #D2691E" @click="unLogin" class="notepad_header_translate__item">
                        退出登录
                    </b>
                </el-dropdown-item>
            </el-dropdown-menu>
            </template>
        </el-dropdown>
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
import moon from '@renderer/store'
export default defineComponent({
  name: 'user',
  props: {
      userInfo: Object,
      unLogin: Function,
  },
  setup(props, context) {
    const state = reactive({
       
    })
    onMounted(() => {
    })
    onUnmounted(() => { 
    })
    return { 
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss">
@import '@renderer/styles/style.scss';
.notepad_header_translate {
    flex: 1;
    @extend %Flex-Center-End;
    padding-left: 20px;
        img {
        @include BR(50%);
        background-color: aliceblue;
        filter: grayscale(30%);
        transition: .35s;
        box-sizing: content-box;
        opacity: .9;
        margin-right: 12px;
        margin-top: 2px;
        width: 33px;
        height: 33px;
        &:hover {
            opacity: 1;
            background: $color-default-derived-06;
        }
    }
    &__item {
        svg {
            margin-right: 10px;
            color: aliceblue;
            background: aliceblue;
            border-radius: 50%;
            padding: 4px;
        }
        font-family:'Times New Roman', Times, serif;
        min-width: 88px;
        @extend %Flex-Center-Start;
    }
}
.el-dropdown-menu {
    max-height: 500px !important;
    overflow-y: auto;
}
</style>

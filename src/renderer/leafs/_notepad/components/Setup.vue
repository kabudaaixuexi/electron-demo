<template>
	<article class="notepad_header_setup">
        <el-dropdown trigger="click">
            <span class="el-dropdown-link">
                <svg t="1648525681011" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8456" width="24" height="24"><path d="M878.08 466.944l-129.3824-253.0816a98.8672 98.8672 0 0 0-88.064-53.8624H366.08c-36.864 0-70.656 20.48-87.6544 53.1456l-132.096 253.0816a98.8672 98.8672 0 0 0 0 91.5456l132.096 253.0816a98.8672 98.8672 0 0 0 87.6544 53.1456h294.5536c37.1712 0 71.168-20.7872 88.064-53.8624l129.3824-253.1328a98.8672 98.8672 0 0 0 0-90.0096z m-72.3968 372.3264a162.8672 162.8672 0 0 1-145.0496 88.7296H366.08a162.8672 162.8672 0 0 1-144.384-87.552l-132.096-253.0816a162.8672 162.8672 0 0 1 0-150.7328l132.096-253.1328a162.8672 162.8672 0 0 1 144.384-87.5008h294.5536c61.184 0 117.1968 34.304 145.0496 88.7296l129.3824 253.1328c23.808 46.592 23.808 101.7344 0 148.2752l-129.3824 253.1328z" p-id="8457" fill="#ffffff"></path><path d="M512 697.6a185.6 185.6 0 1 1 0-371.2 185.6 185.6 0 0 1 0 371.2z m0-64a121.6 121.6 0 1 0 0-243.2 121.6 121.6 0 0 0 0 243.2z" p-id="8458" fill="#ffffff"></path></svg>
            </span>
            <template #dropdown>
            <el-dropdown-menu>
                <!-- 是否仅粘贴文本 -->
                <el-dropdown-item>
                    <p class="">* <span>粘贴板信息格式化</span></p>
                    <el-radio-group @change="handleChangePaste" v-model="choice" size="small">
                        <el-radio-button label="仅粘贴文本" />
                        <el-radio-button label="粘贴全部信息" />
                    </el-radio-group>
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
import { ElNotification } from 'element-plus'
export default defineComponent({
  name: 'setup',
  props: {
    choice: String,
    onChangePaste: Function
  },
  setup(props, context) {
    const state = reactive({
    })
    const handleChangePaste = async (e) => {
        props.onChangePaste(e)
    }
    onMounted(() => {
    })
    onUnmounted(() => { 
    })
    return { 
      ...toRefs(state),
      handleChangePaste
    };
  }
});
</script>

<style lang="scss">
@import '@renderer/styles/style.scss';
.notepad_header_setup {
    @extend %Flex-Center-Start;
    // padding-left: 50px;
        svg {
        @include BR(3px);
        transition: .35s;
        box-sizing: content-box;
        opacity: .8;
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
}
</style>

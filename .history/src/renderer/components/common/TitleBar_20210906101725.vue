<template>
  <div class="vhead"></div>
  <div class='head-info drag'>
    <div v-if='isMacintosh' class='content'>
      <div></div>
      <router-link v-if="argsData.route !== '/'" :to="{name:'Desk',params:{from:encodeURIComponent(argsData.route)}}">起点</router-link>
      <div class='title'>
        {{ GlobalHeadTitle }}
      </div>
    </div>
    <div v-else class='content'>
      <div class='title'>
        {{ GlobalHeadTitle }}
      </div>
      <div v-if='eventShow' class='events'>
        <div @click='min' class='event min no-drag'></div>
        <div @click='maxMin' class='event max-min no-drag'></div>
        <div @click='close' class='event close no-drag'></div>
      </div>
    </div>
  </div>
</template>
<style lang='scss' scoped>
@import '../../../assets/scss/style.scss';
.darwin {
  .head-info {
    height: 22px;
    font-size: 12px;
  }
  .vhead {
    height: 22px;
  }
}

.win32,
.linux {
  .head-info {
    font-size: 13px;
    padding-top: 32px;
    height: 32px;
  }
  .vhead {
    height: 32px;
  }
}

.head-info {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--white);
  background-color: var(--black);

  > .content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > a {
      color:$color-primary-main;
      text-decoration: none;
      cursor: pointer;
      transform: scale(.8) translate(-50%, -50%);
      position: absolute;
      left: 50%;
      top: 50%;
      &:hover {
        color:rgb(60, 141, 117) ;
      }
    }
    > .title {
      font-family:monospace;
      padding: 10px;
    }

    > .events {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 5px;

      > .event {
        clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        width: 15px;
        height: 15px;
        margin-left: 5px;
        &:hover{
          opacity: 0.9;
          transition: .3s;
          transform: rotate(180deg);
        }
        &:active {
          opacity: 0.7;
        }
        &.close {
          background-color: var(--red);
        }
        &.min {
          background-color: var(--grey);
        }
        &.max-min {
          background-color: var(--cyan);
        }
      }
    }
  }
}
</style>
<script>
import { computed, defineComponent, toRefs, inject, onUnmounted, getCurrentInstance } from 'vue';
import { getGlobal } from '@renderer/config/globalInformation';
import customize from '@renderer/store/customize';
import { menuShow, menuOn, menuListenersRemove } from '@renderer/utils/menu';
import { windowClose, windowMaxMin, windowMin } from '@renderer/utils/window';

export default defineComponent({
  name: 'GlobalHead',
  props: {
    eventShow: { // 仅 linux win 生效
      type: Boolean,
      default: true
    }
  },
  setup() {
    const argsData = customize.get();
    // const GlobalConfig = inject('config')
    const isMacintosh = computed(() => getGlobal<string>('system.platform') === 'darwin');
    function min() {
      windowMin(argsData.id);
    }

    function maxMin() {
      windowMaxMin(argsData.id);
    }

    function close() {
      windowClose(argsData.id);
    }
    
    onUnmounted(() => { 
       
    })
    return {
      min,
      maxMin,
      close,
      argsData,
      // ...toRefs(GlobalConfig as object),
      isMacintosh
    };
  }
});
</script>

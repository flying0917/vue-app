<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script>
import FooterTab from '@/components/Footer'
export default {
  name: 'app',
  data()
  {
    return {
      transitionName:""
    }
  },
  components:{
    FooterTab
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
body {
  background-color: #fbf9fe;
}
  #app{
      height:100%;
   }
</style>

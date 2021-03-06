// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'


import FastClick from 'fastclick'
import router from '@/router/index'
import App from './App'
import Global from '@/config/global'
import './assets/css/cui.css'
import './assets/css/add-css.css'
import { ToastPlugin,LoadingPlugin,DatetimePlugin } from 'vux'

Vue.use(ToastPlugin)
Vue.use(DatetimePlugin)
Vue.use(LoadingPlugin)

Vue.prototype.GLOBAL = Global

FastClick.attach(document.body)

Vue.config.productionTip = false
//跳页
Vue.prototype.$goRoute=function(index)
{
  this.$router.push(index)
}
//回退
Vue.prototype.$goRoute=function(index)
{
  this.$router.back(-1)
}

/* eslint-disable no-new */
if(Global.isApp)
{
  window.apiready=function()
  {
    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app-box')
  }
}
else
{
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app-box')
}

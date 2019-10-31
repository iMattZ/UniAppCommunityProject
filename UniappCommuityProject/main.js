import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// 引入全局组件
import divider from './component/common/divider.vue'
Vue.component('divider',divider)

// 引入无数据图
import noThing from './component/common/no-thing.vue'
Vue.component('no-thing',noThing)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

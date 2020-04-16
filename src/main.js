import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import axios from 'axios'
import Router from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css';
import Main from './components/Main'
import PostContent from './components/PostContent'

Vue.use(Element)
Vue.use(Router)
Vue.prototype.$axios = axios

Vue.config.productionTip = false

const routes = [
  {path: '/', component: Main},
  {path: '/post/:id', component: PostContent, props: true}
]

const router = new Router({
  routes 
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

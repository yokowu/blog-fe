import Vue from 'vue'
import Router from 'vue-router'
import Main from './components/Main'
import PostContent from './components/PostContent'

Vue.use(Router)

const routes = [
  {path: '/', component: Main},
  {path: '/post/:id', component: PostContent, props: true}
]

export default new Router({
  routes 
})

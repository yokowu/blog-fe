<template>
  <div id="app">
    <Index></Index>
  </div>
</template>

<script>
import Index from './components/Index'

export default {
  name: 'App',
  components: {
    Index
  },
  created() {
    document.title = "Yoko | 文章列表"
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  /* background-color: rgb(250, 250, 250); */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

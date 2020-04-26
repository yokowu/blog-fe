<template>
    <el-container>
        <el-header class="header" height="60px">
            <div class="header-title" v-on:click="jump">
                Yoko
            </div>
        </el-header>

        <el-main>
            <router-view></router-view>
        </el-main>

        <el-footer>
            <Footer></Footer>
        </el-footer>
    </el-container>
</template>

<script>
import Footer from './Footer'

export default {
    name: "Index",
    components: {
        Footer
    },
    methods: {
        jump: function() {
            console.log("======")
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
@font-face {
  font-family: 'webfont';
  font-display: swap;
  src: url('//at.alicdn.com/t/webfont_cf9t8q37wmf.eot'); /* IE9*/
  src: url('//at.alicdn.com/t/webfont_cf9t8q37wmf.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('//at.alicdn.com/t/webfont_cf9t8q37wmf.woff2') format('woff2'),
  url('//at.alicdn.com/t/webfont_cf9t8q37wmf.woff') format('woff'), /* chrome、firefox */
  url('//at.alicdn.com/t/webfont_cf9t8q37wmf.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url('//at.alicdn.com/t/webfont_cf9t8q37wmf.svg#站酷小薇体') format('svg'); /* iOS 4.1- */
}

.header {
    height: 400px;
    /* background-image: url('../assets/nav.png'); */
    background-repeat: no-repeat;
    background-position: 10% top;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}

.header-title {
    height: 100%;
    font-size: 50px;
    font-weight: bold;
    font-family: "webfont" !important;
    color: rgb(75, 170, 211);
    text-align: left;
    margin-left: 15%;
}

.header-title:hover {
    cursor: pointer;
}
</style>
<template>
    <el-container>
        <el-header class="header" height="60px">
            <div class="header-title">
                Yoko
            </div>
        </el-header>

        <el-main>
            <Main></Main>
        </el-main>

        <el-footer>
            <Footer></Footer>
        </el-footer>
    </el-container>
</template>

<script>
import Footer from './Footer'
import Main from './Main'

export default {
    name: "Index",
    components: {
        Footer,
        Main
    }
}
</script>

<style scoped>
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
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    text-transform: uppercase;
    color: rgb(75, 170, 211);
}
</style>
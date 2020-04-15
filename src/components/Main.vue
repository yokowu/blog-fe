<template>
    <div class="content">
        <div class="post-title" v-for="p in posts" :key="p">
            {{ p.title }}
        </div>
    </div>
</template>

<script>
export default {
    name: "Main",
    data() {
        return {
            title: "Gin 的路由规则 - 介绍2",
            posts: [
                {title: "Gin 的路由规则 - 介绍"},
                {title: "Gin 的路由规则 - 介绍1"}
            ]
        }
    },
    methods: {
        getData() {
            var that = this
            this.$axios.get('http://127.0.0.1:8080/get')
            .then(response => {
                console.log(response.data)
                that.posts = response.data.posts
            })
            .catch(e => {
                console.log(e)
            })
        }
    }
}
</script>

<style scoped>
.content {
    height: 800px;
    width: 70%;
    /* background-color: cornflowerblue; */
    position: relative;
    left: 15%;
}

.post-title {
    text-align: left;
    color: rgb(53, 124, 153);
    font-size: xx-large;
    top: 10%;
}
</style>
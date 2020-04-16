<template>
    <div class="content">
        <div class="container" v-for="p in posts" :key="p"></div>
        <PostCard v-for="post in posts" :key="post.title" :post="post"></PostCard>
    </div>
</template>

<script>
import PostCard from "./PostCard"

export default {
    name: "Main",
    components: {
        PostCard
    },
    data() {
        return {
            title: "Gin 的路由规则 - 介绍2",
            coverIcon: "https://images-cdn.shimo.im/aPgQikRsvtIyrmxw/image.png",
            posts: [
                {title: "Gin 的路由规则 - 介绍"},
                {title: "Gin 的路由规则 - 介绍1"},
                {title: "Gin 的路由规则 - 介绍2"},
                {title: "Gin 的路由规则 - 介绍3"},
                {title: "Gin 的路由规则 - 介绍4"}
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
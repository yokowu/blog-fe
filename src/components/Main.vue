<template>
    <div class="content">
        <PostCard v-for="post in posts" :key="post.id" :post="post"></PostCard>
    </div>
</template>

<script>
import PostCard from "./PostCard"
import {getPostDescList} from '../request/api'

export default {
    name: "Main",
    components: {
        PostCard
    },
    data() {
        return {
            posts: []
        }
    },
    created() {
        var that = this
        getPostDescList().then(rsp => {
            console.log(rsp)
            that.posts = rsp.data.posts
        })
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
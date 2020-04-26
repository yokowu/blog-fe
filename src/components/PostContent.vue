<template>
    <div class="container">
        <h2 class="title">{{ post.title }}</h2>
        <mavon-editor
            :boxShadow="false"
            boxShadowStyle=""
            defaultOpen="preview"
            previewBackground="#ffffff"
            v-model="cnt"
            :toolbarsFlag="false"
            :subfield="false"
            :editable="false"
        ></mavon-editor>
    </div>
</template>

<script>
import {getPostById} from '../request/api'

export default {
    name: "PostContent",
    props: ['id'],
    data() {
        return {
            post: {},
            postId: this.id + 1,
            cnt: "",
        }
    },
    created() {
        getPostById(this.id).then(rsp => {
            console.log(rsp)
            this.post = rsp.data
            this.cnt = rsp.data.content
        }).catch(rsp => {
            console.log(rsp)
        })
    }
}
</script>

<style scoped>
.container {
    width: 60%;
    margin: auto;
}
</style>
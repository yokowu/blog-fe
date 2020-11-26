<template>
    <div class="container">
        <div class="info">
            <input class="title" v-model="title" type="text" placeholder="标题">
            <input type="text" v-model="coverUrl" class="coverUrl" placeholder="coverUrl">
        </div>
        <mavon-editor class="mavon"
        @save="$save"
        ></mavon-editor>
    </div>
</template>

<script>
import { setPost } from '../request/api'

export default {
    name: "Edit",
    props: [''],
    data() {
        return {
            title: "",
            coverUrl: "",
        }
    },
    methods: {
        $save: function(value, render) {
            var post = {
                content: value,
                title: this.title,
                coverUrl: this.coverUrl,
                desc: render.slice(0, 200)
            }
            setPost(post).then(rsp => {
                console.log(rsp)
            }).catch(rsp => {
                console.log(rsp)
            })
        }
    }
}
</script>

<style scoped>
#editor {
    border: none;
}

.container {
    width: 100%;
    margin: auto;
    height: 100%;
}

.info {
    width: 100%;
    height: 20px;
    margin-bottom: 40px;
}

.info input {
    outline-style: none ;
    border: 1px solid #ccc; 
    border-radius: 3px;
    padding: 13px 14px;
    width: 620px;
    font-size: 14px;
    font-weight: 700;
    font-family: "Microsoft soft";
}
</style>
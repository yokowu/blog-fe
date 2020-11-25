<template>
    <div class="container">
        <mavon-editor
        @save="$save"
        ></mavon-editor>
    </div>
</template>

<script>

export default {
    name: "Edit",
    props: [''],
    data() {
        return {
            post: {},
            cnt: "",
        }
    },
    methods: {
        $save: function(value, render) {
            console.log(value)
            console.log(render)
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
</style>
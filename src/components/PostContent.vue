<template>
    <div class="content">
        <div class="title">Gin Lala {{ idid }}</div>
    </div>
</template>

<script>
export default {
    name: "PostContent",
    props: ['id'],
    data() {
        return {
            idid: this.id + 1
        }
    }
}
</script>

<style scoped>

</style>
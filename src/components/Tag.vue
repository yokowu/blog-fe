<template>
    <div class="tag">
        {{ tag }}
    </div>
</template>

<script>
export default {
    name: "Tag",
    props: ['tag']
}
</script>

<style scoped>
.tag {
    font-size: 13px;
    color: white;
    border-radius: 6px;
    margin-left: 10px;
    padding: 0 6px;
    background-color: rgb(133, 133, 166);
}
</style>
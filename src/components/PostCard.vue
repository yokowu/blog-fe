<template>
  <div class="card" v-on:click="jump">
    <div class="cover-icon" :style="{backgroundImage: 'url(' + post.coverUrl + ')'}"></div>
    <div class="title">
      {{ post.title }} | {{ post.coverUrl }}
    </div>
    <!-- <div class="content">
      {{ post.content }}...
    </div> -->
  </div>
</template>

<script>
export default {
    name: "PostCard",
    props: ['post'],
    methods: {
      jump: function() {
        this.$router.push('/post/' + this.post.id)
      }
    }
}
</script>

<style>
.card {
  widows: 100%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 10px;
  margin-bottom: 20px;
}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.title {
  font-size: 25px;
  font-weight: 600;
  text-align: left;
  padding: 10px;
  padding-left: 20px;
  color: rgb(53, 124, 153);
}

.content {
  font-size: 18px;
  font-weight: 300;
  text-align: left;
  padding: 10px;
  padding-left: 20px;
}

.cover-icon {
  height: 400px;
  width: 100%;
  /* background-image: url("https://images-cdn.shimo.im/aPgQikRsvtIyrmxw/image.png"); */
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
</style>

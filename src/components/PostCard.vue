<template>
  <div class="card">
    <div class="top-line" :style="randomRgb()"></div>
    <div class="card-left">
      <div class="title" v-on:click="jump">
        {{ post.title }} | {{ post.coverUrl }}
      </div>

      <div class="desc">
        {{ post.desc }}...
      </div>
    </div>

    <div class="card-right" v-if="post.coverUrl">
      <div class="img-box">
        <img :src="post.coverUrl" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "PostCard",
    props: ['post'],
    methods: {
      jump: function() {
        this.$router.push('/post/' + this.post.id)
      },
      randomRgb: function() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var alpha = Math.random();
        return {background: `rgb(${r},${g},${b},${alpha})`};
      }
    }
}
</script>

<style>
.img-box {
  width: 200px;
  height: 200px;
}

img {
  width: auto;
	height: auto;
	max-width: 100%;
	max-height: 100%;
  position: relative;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%)
}

.card {
  float: left;
  height: 100%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 10px;
  margin-bottom: 20px;
}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.card-left {
  float: left;
  height: 100%;
  width: 80%;
}

.card-right {
  margin-left: 80%;
}

.title {
  font-size: 25px;
  font-weight: 600;
  text-align: left;
  padding: 10px;
  padding-left: 20px;
  color: rgb(53, 124, 153);
}

.desc {
  font-size: 18px;
  font-weight: 300;
  text-align: left;
  padding: 10px;
  padding-left: 20px;
}

.top-line {
  height: 10px;
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
</style>

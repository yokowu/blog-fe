<template>
  <div class="card" v-on:click="jump">
    <!-- <div class="top-line" :style="randomRgb()"></div> -->
    <div class="card-box">
      <div class="card-left">
        <div class="card-title">
          {{ post.title }}
        </div>

        <div class="card-mid">
          <img src="../assets/date.svg" alt="">
          {{ post.date }}
        </div>

        <div class="card-desc">
          {{ post.desc }}...
        </div>
      </div>

      <div class="card-right" v-if="post.coverUrl">
        <div class="img-box">
          <img :src="post.coverUrl" alt="">
        </div>
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
  margin-right: 20px;
}

.img-box img {
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
  height: 200px;
  width: 100%;
  /* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); */
  transition: 0.3s;
  border-radius: 10px;
  margin-bottom: 20px;
}

.card:hover {
  cursor: pointer;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.card-box {
  display: flex;
}

.card-left {
  width: 60%;
  flex: 3 0 auto;
}

.card-title {
  font-size: 25px;
  font-weight: 600;
  text-align: left;
  padding: 10px;
  padding-left: 20px;
  color: rgb(53, 124, 153);
}

.card-mid {
    font-size: 16px;
    font-weight: 200;
    text-align: left;
    padding-left: 20px;
    color: rgb(53, 124, 153);
}

.card-mid img {
    height: 15px;
    width: 15px;
}

.card-desc {
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

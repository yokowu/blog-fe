<template>
  <div class="card">
    <img src="https://images-cdn.shimo.im/aPgQikRsvtIyrmxw/image.png" alt="封面图" class="cover-icon">
    <div class="title">
      {{ post.title }} | {{ post.date }}
    </div>
  </div>
</template>

<style>
img {
	width: 80%;
	height: 80%;
	max-width: 100%;
	max-height: 100%;	
  border-radius: 10px 10px 0 0;
}

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

.cover-icon {
  height: 400px;
  width: 100%;
  background-image: 'https://images-cdn.shimo.im/aPgQikRsvtIyrmxw/image.png';
}
</style>

<script>
export default {
    name: "PostCard",
    props: ['post']
}
</script>
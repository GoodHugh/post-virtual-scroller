<script setup lang="ts">

interface Props {
  title: string;
  image: string;
  content: string;
}

const props = defineProps<Props>();

</script>

<template>
<div class="post-data-list-item">
  <img class="post-data-list-item__img" loading="lazy" :src="props.image" :alt="props.title" />
  <div class="post-data-list-item__content">
    <h3 class="post-data-list-item__content-title">{{ props.title }}</h3>
    <p class="post-data-list-item__content-body">{{ props.content }}</p>
  </div>
</div>
</template>

<style scoped>
.post-data-list-item {
  border-radius: 10px;
  border: 1px solid black;
  padding: 12px;
  display: flex;
  gap: 10px;
  background-color: aliceblue;
  align-items: center;
}

.post-data-list-item__img {
  font-size: 0;
  width: 150px;
}

.post-data-list-item__content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.post-data-list-item__content-title {
  font-weight: bold;
}

.post-data-list-item__content-body {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
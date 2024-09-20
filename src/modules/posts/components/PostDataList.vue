<script setup lang="ts">
import {usePostsDataStore} from "@/modules/posts/stores/postsDataStore";
import {storeToRefs} from "pinia";
import VLoader from "@/components/BaseComponents/VLoader/VLoader.vue";
import PostDataListItem from "@/modules/posts/components/PostDataListItem.vue";
import { useVirtualList} from "@vueuse/core";

const postsDataStore = usePostsDataStore();
const { isLoading, posts } = storeToRefs(postsDataStore);

const { list, containerProps, wrapperProps } = useVirtualList(
    posts,
    {
      itemHeight: 107,
    },
)

postsDataStore.getAllPosts()

</script>

<template>
  <VLoader v-if="isLoading" />
    <div v-else v-bind="containerProps" style="height: 1100px">
      <div class="post-data-list" v-bind="wrapperProps">
        <PostDataListItem
            v-for="post in list"
            :title="post.data.title"
            :content="post.data.content"
            :image="post.data.image"
            :key="post.data.id"
            style="height: 107px"
        />
      </div>
  </div>
</template>

<style scoped>
.post-data-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 16px 12px 0;
}
</style>
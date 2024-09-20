import {defineStore} from "pinia";
import {ref} from "vue";
import type {ApiDataPost} from "@/modules/posts/types/apiDataPost";

export const usePostsDataStore = defineStore('PostDataStore', () => {
    const isLoading = ref(false);
    const posts = ref<Array<ApiDataPost>>([])

    const baseUrl = 'https://jsonplaceholder.org';

    async function getAllPosts() {
        try {
            isLoading.value = true;
            const data = await fetch(`${baseUrl}/posts`).then((res) => res.json());
            isLoading.value = false;
            posts.value = [...data];
        } catch (error) {
            console.log(error);
        }
    }

    return {
        isLoading,
        posts,

        getAllPosts,
    }
})
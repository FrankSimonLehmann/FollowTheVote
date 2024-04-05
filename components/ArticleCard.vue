<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  cover: String,
  title: String,
  description: String,
  members: Array,
  articleId: Number,
});

console.log(props.articleId);
const router = useRouter();

const navigateToArticle = () => {
  // Implement navigation logic here, for example:
  router.push(`/article/${props.articleId}`);
};

console.log(props.cover);
</script>

<template>
  <div @click="navigateToArticle" class="flex flex-col h-full min-w-96 max-w-lg mx-auto p-6 border border-gray-100 rounded-lg shadow dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-left xl:p-8 cursor-pointer">
    <img :src="cover" alt="Article Cover" class="object-cover rounded-lg h-60">
    <h3 class="mt-4 mb-2 text-2xl font-semibold">{{ title.length > 50 ? title.slice(0, 50) + '...' : title }}</h3>
    <p>{{ description.length > 250 ? description.slice(0, 250) + '...' : description }}</p>


    <!-- Spacer div that grows to push the bottom content to the end -->
    <div class="flex-grow"></div>

    <div class="flex items-center mt-4">
      <div class="mx-2 border rounded-full" v-for="member in members" :key="member.id">
        <img :src="'http://localhost:1337' + member.attributes.Portrait.data.attributes.url" :alt="`${member.attributes.First_name} ${member.attributes.Last_name}`" class="object-cover rounded-full w-10 h-10">
      </div>
    </div>

    <!-- Read More button with stop click propagation -->
    <a href="#" @click.stop="navigateToArticle" class="inline-flex items-center mt-4 btn-soft">
      Read more
      <svg class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </a>
  </div>
</template>

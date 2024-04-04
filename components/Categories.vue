<script setup lang="ts">
import { defineProps } from 'vue'

// Define the props to fit the "Category" data architecture
const props = defineProps({
  title: String,
  description: String,
  cover: String,
  numberOfArticles: String,
})
</script>

<template>
  <div class="flex flex-col max-w-lg mx-auto text-gray-900  dark:text-white text-left">
    <h3 class="text-2xl font-semibold text-left">{{ title }}</h3>
    <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400 text-balance text-left my-4">{{ description }}</p>
    <a href="#" class="btn-soft">All articles ({{ numberOfArticles }})
      <svg class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </a>
  </div>
  </template>

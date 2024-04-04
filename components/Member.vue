<script setup lang="ts">
// Import Vue's defineProps function for TypeScript support
import { defineProps } from 'vue'

// Define the props your component will accept
const props = defineProps({
  first_name: String,
  last_name: String,
  description: String,
  profileImage: String,
  linkedIn: String,
  projects: Array,
})
</script>

<template>
<div class="relative h-full flex flex-col max-w-lg p-6 mx-auto text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white text-left">
  <img :src= profileImage alt="Maren Heinz" class="object-cover rounded-lg h-60">
    <div class="flex items-center justify-between my-4">
      <h3 class="text-2xl font-semibold">{{first_name}} {{last_name}}</h3>
      <a :href="linkedIn" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="flex-shrink-0 w-7 h-7 text-green-500 dark:text-green-400" fill="currentColor"><path fill-rule="evenodd" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" clip-rule="evenodd"/></svg>
      </a>
    </div>
    <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400 text-balance text-left">{{description}}</p>
    <div class="flex gap-4 mt-4 bottom-0">
      <img v-for="project in projects" :key="project.id" :src="project" alt="logo" class="border rounded-full w-10 h-10 object-cover">
    </div>
  </div>
</template>

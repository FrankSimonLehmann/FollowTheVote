<script setup lang="ts">
import { defineProps } from 'vue'

// Define the props according to the "Article" data architecture
const props = defineProps({
  title: String,
  description: String,
  cover: String, // Assuming you'll pass the URL of the cover image as a string
  body: String, // Assuming the body will be passed as HTML or plain text
  members: Array, // An array of member objects related to the article
})

</script>

<template>
  <div class="h-full min-w-96 flex flex-col max-w-lg p-6 mx-auto text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white text-left">
    <img :src="cover" alt="Article Cover" class="object-cover rounded-lg h-60">
    <div v-for="member in members" :key="member.id" class="rounded mt-4 flex items-center">
      <img :src="'http://localhost:1337' + member.attributes.Portrait.data.attributes.url" :alt="`${member.attributes.First_name} ${member.attributes.Last_name}`" class="object-cover rounded-full w-10 h-10">
      <p class="mx-4">{{ member.attributes.First_name }} {{ member.attributes.Last_name }}</p>
    </div>
    <h3 class="text-2xl font-semibold text-balance text-left my-4">{{ title }}</h3>
    <p class="text-left">{{ description }}</p>
    <a href="#" class="btn-soft mt-4">Read more
      <svg class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </a>
  </div>
  </template>

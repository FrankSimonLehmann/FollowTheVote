<script setup lang="ts">

import { defineProps } from 'vue'

// Define the props to match the "Article" data architecture
  const props = defineProps({
    title: String, // Title of the article
    description: String, // Short description or summary of the article
    cover: String, // URL string for the cover image; assuming you'll pass the URL as a string
    body: Array, // Main content of the article; assuming rich text is converted to HTML or a similar string format
    members: Array, // An array of member objects; details depend on how you structure a "Member" object
    keyPoints: Array, // Key points of the article; assuming rich text is converted to HTML or a similar string format
    sources: Array, // Sources or references; assuming rich text is converted to HTML or a similar string format
    publishingDate: String, // Publishing date of the article; assuming the date is passed as a string (e.g., ISO 8601 format)
    readingTime: Number, // Estimated reading time in minutes
    videoUrl: String,// URL for an embedded video; assuming the URL is passed as a string
    category: String // Category of the article; assuming the category is passed as a string
  })
  
  </script>

<template>
  <!-- Intro block -->
      <section class="bg-white dark:bg-gray-900">
      <div class="max-w-screen-md px-4 py-8 mx-auto lg:px-6">
        <div class="max-w-screen-md mx-auto mb-8 lg:mb-12">
          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white" >{{ title || 'Default Title' }}</h1>
          <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">{{ description || 'Default Description' }}</p>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4" >
            <div class="mt-4 flex items-center" v-for="member in members" :key="member.id">
              <img :src="'http://localhost:1337' + member.attributes.Portrait.data.attributes.url" :alt="`${member.attributes.First_name} ${member.attributes.Last_name}`" class="object-cover rounded-full w-10 h-10">
              <p class="mx-4 mb-0">{{ member.attributes.First_name }} {{ member.attributes.Last_name }}</p>
            </div>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4" >
            <div class="mt-4 flex items-center ">
              <svg  class="w-5 h-5 ml-1" xmlns="http://www.w3.org/2000/svg" fill="white"  viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
              <p class="mx-4 mb-0">{{ readingTime || "Average time" }} min</p>
            </div>
            <div class="mt-4 flex items-center ">
              <svg class="w-5 h-5 ml-1" xmlns="http://www.w3.org/2000/svg" fill="white"  viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z"/></svg>
              <p class="mx-4 mb-0">{{ publishingDate || "Average time" }}</p>
            </div>
              <div class="mt-4 flex items-center text-base font-medium leading-tight text-gray-900 dark:text-white btn-transparent">
                <svg class="w-5 h-5 ml-1"  xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 512 512"><path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
                <p class="mx-4 mb-0">{{ category.attributes?.Title || "Unassigned" }}</p>
              </div>
            </div>
        </div>
        <video v-if="videoUrl" :src="videoUrl" controls class="rounded-lg w-full h-full"></video>
        <img v-else :src="cover" alt="" class="rounded-lg">
      </div>

    </section>
    <!-- Intro block -->

    <!-- Key points -->
    <KeyPoints v-if="keyPoints" :value="keyPoints" />
    <!-- Key points -->

  <!-- Article content -->
    <section class="bg-white dark:bg-gray-900">
  <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6">
    <div class="max-w-screen-md mx-auto">
      <div v-for="section in body" :key="section.id">
        <!-- Render Paragraph component -->
        <Paragraph
          v-if="section.type === 'paragraph'"
          :value="section"
          class="mb-6 text-gray-500 dark:text-gray-400"
        />

        <!-- Render Header component -->
        <Header
          v-if="section.type === 'heading'"
          :value="section"
          :class="`mb-4 ${section.level === 1 ? 'text-3xl font-bold' : 'text-2xl font-bold'} text-gray-900 dark:text-white`"
        />

        <!-- Render Images component -->
        <Images
          v-if="section.type === 'image'"
          :value="section"
          class="mx-auto my-8 rounded-lg"
        />
      </div>
    </div>
  </div>
</section>
<!-- Article content -->


    <!-- Sources  -->
    <Sources v-if="sources" :value="sources" />

</template>

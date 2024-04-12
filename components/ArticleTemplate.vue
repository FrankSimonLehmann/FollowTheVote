<script setup lang="ts">

import { defineProps } from 'vue'
import { format, parseISO } from 'date-fns';


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
    categories: Array // Category of the article; assuming the category is passed as a string
  })
  const config = useAppConfig()
  console.log(props.cover)

</script>

<template>
  <!-- Intro block -->

  <section class="bg-white dark:bg-gray-900">
    <div class="max-w-screen-md px-4 py-8 mx-auto lg:px-6">
      <div class="max-w-screen-md mx-auto mb-8 lg:mb-12">
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-color-primary">
          {{ title || 'Default Title' }}
        </h1>
        <!-- Only display the description if it exists -->
        <p v-if="description" class="mb-5 font-light text-gray-500 sm:text-xl  text-color-tertiary">
          {{ description }}
        </p>
        <!-- Unified grid for all details -->
        <div class="flex flex-wrap gap-x-10 gap-y-4 mt-4">
          <!-- Member details -->
          <div v-for="member in members" :key="member.id" class="flex items-center">
            <img :src="config.strapiBaseUrl + member.attributes.Portrait.data.attributes.url" :alt="`${member.attributes.First_name} ${member.attributes.Last_name}`" class="object-cover rounded-full w-10 h-10">
            <p class="ml-4">{{ member.attributes.First_name }} {{ member.attributes.Last_name }}</p>
          </div>
          <!-- Reading time if it exists -->
          <div v-if="readingTime" class="flex items-center">
            <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
            <p>{{ readingTime }} min</p>
          </div>
          <!-- Publishing date if it exists -->
          <div v-if="publishingDate" class="flex items-center">
            <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z"/></svg>
            <p>{{ format(parseISO(publishingDate), 'dd/MM/yyyy') }}</p>
          </div>
          <!-- Category details -->
          <div v-for="category in categories" :key="category.id" class="flex items-center">
            <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 512 512"><path d="M500.3 7.3C507.7 13.3 512 22.4 512 32V176c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48V71L352 90.2V208c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48V64c0-15.3 10.8-28.4 25.7-31.4l160-32c9.4-1.9 19.1 .6 26.6 6.6zM74.7 304l11.8-17.8c5.9-8.9 15.9-14.2 26.6-14.2h61.7c10.7 0 20.7 5.3 26.6 14.2L213.3 304H240c26.5 0 48 21.5 48 48V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V352c0-26.5 21.5-48 48-48H74.7zM192 408a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM478.7 278.3L440.3 368H496c6.7 0 12.6 4.1 15 10.4s.6 13.3-4.4 17.7l-128 112c-5.6 4.9-13.9 5.3-19.9 .9s-8.2-12.4-5.3-19.2L391.7 400H336c-6.7 0-12.6-4.1-15-10.4s-.6-13.3 4.4-17.7l128-112c5.6-4.9 13.9-5.3 19.9-.9s8.2 12.4 5.3 19.2zm-339-59.2c-6.5 6.5-17 6.5-23 0L19.9 119.2c-28-29-26.5-76.9 5-103.9c27-23.5 68.4-19 93.4 6.5l10 10.5 9.5-10.5c25-25.5 65.9-30 93.9-6.5c31 27 32.5 74.9 4.5 103.9l-96.4 99.9z"/></svg>
            <p>{{ category.attributes?.Title || "Unassigned" }}</p>
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
            class="mb-6 text-gray-500  text-color-tertiary"
          />

          <!-- Render Header component -->
          <Header
            v-if="section.type === 'heading'"
            :value="section"
            :class="`mb-4 ${section.level === 1 ? 'text-3xl font-bold' : 'text-2xl font-bold'}  text-color-primary`"
          />

          <!-- Render List component -->
          <List
            v-if="section.type === 'list'"
            :value="section"
            class="mb-6"
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

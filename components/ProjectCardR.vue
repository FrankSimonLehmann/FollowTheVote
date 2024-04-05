<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  name: String,
  logo: String,
  cover: String,
  description: String,
  instagramLink: String,
  tiktokLink: String,
  websiteLink: String,
  spotifyLink: String,
  youtubeLink: String,
  members: Array,
});

const router = useRouter();

const navigateToArticle = () => {
  // Implement navigation logic here, for example:
  router.push(`/article/${props.articleId}`);
};

</script>

<template>
  <section class="bg-gray-900">
    <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:px-6">
      <div class="items-top gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
        <img :src="cover" alt="Project Cover" class="hidden mb-4 rounded-lg lg:mb-0 lg:flex w-full h-full object-cover">
        <div class="text-gray-500 sm:text-lg dark:text-gray-400">
          <div class="flex items-center mb-7">
            <img :src="logo" alt="Project Logo" class="w-12 h-12">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white mx-4">{{ name }}</h2>
          </div>
          <a :href="websiteLink" class="btn">see project</a>
          <p class="my-8 font-light lg:text-xl">{{ description }}</p>
          <!-- Dynamically include additional social media links -->
          <ul role="list" class="space-y-5">
            <li class="flex space-x-3 items-center" v-if="instagramLink">
              <img src="../public/Instagram.png" alt="Instagram" class="flex-shrink-0 w-5 h-5">
              <a :href="instagramLink" class="text-base font-medium leading-tight text-gray-900 dark:text-white">Instagram</a>
            </li>
            <li class="flex space-x-3 items-center" v-if="tiktokLink">
              <img src="../public/TikTok.png" alt="TikTok" class="flex-shrink-0 w-5 h-5">
              <a :href="tiktokLink" class="text-base font-medium leading-tight text-gray-900 dark:text-white">TikTok</a>
            </li>
            <li class="flex space-x-3 items-center" v-if="youtubeLink">
              <img src="../public/youtube.jpg" alt="Youtube" class="flex-shrink-0 w-5 h-5">
              <a :href="youtubeLink" class="text-base font-medium leading-tight text-gray-900 dark:text-white">Youtube</a>
            </li>
            <li class="flex space-x-3 items-center" v-if="spotifyLink">
              <img src="../public/Spotify.png" alt="Spotify" class="flex-shrink-0 w-5 h-5">
              <a :href="spotifyLink" class="text-base font-medium leading-tight text-gray-900 dark:text-white">Spotify</a>
            </li>
            <li class="flex space-x-3 items-center" v-if="websiteLink">
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" class="w-5 h-5"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/></svg>
              <a :href="websiteLink" class="text-base font-medium leading-tight text-gray-900 dark:text-white">Website</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

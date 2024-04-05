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
console.log(props.youtubeLink);

</script>

<template>
  <section class="bg-gray-800">
    <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:px-6">
      <div class="items-top gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
        <div class="text-gray-500 sm:text-lg dark:text-gray-400">
          <div class="flex items-center mb-7">
            <img :src="logo" alt="Project Logo" class="w-12 h-12 rounded-lg">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white mx-4">{{ name }}</h2>
          </div>
          <a :href="websiteLink" class="btn">see project</a>
          <p class="my-8 font-light lg:text-xl">{{ description }}</p>

          <ul role="list" class="space-y-5">
            <li class="flex space-x-3 items-center" v-if="instagramLink">
              <img src="../public/Instagram.png" alt="" class="flex-shrink-0 w-5 h-5">
              <a :href="instagramLink" class="text-base font-medium leading-tight text-gray-900 dark:text-white">Instagram</a>
            </li>
            <li class="flex space-x-3 items-center" v-if="tiktokLink">
              <img src="../public/TikTok.png" alt="" class="flex-shrink-0 w-5 h-5">
              <a :href="tiktokLink" class="text-base font-medium leading-tight text-gray-900 dark:text-white">TikTok</a>
            </li>
            <li class="flex space-x-3 items-center" v-if="youtubeLink">
              <img src="../public/youtube.jpg" alt="" class="flex-shrink-0 w-5 h-5">
              <a :href="youtubeLink" class="text-base font-medium leading-tight text-gray-900 dark:text-white">Youtube</a>
            </li>
            <li class="flex space-x-3 items-center" v-if="spotifyLink">
              <img src="../public/Spotify.png" alt="" class="flex-shrink-0 w-5 h-5">
              <a :href="spotifyLink" class="text-base font-medium leading-tight text-gray-900 dark:text-white">Website</a>
            </li>
            <li class="flex space-x-3 items-center" v-if="websiteLink">
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" class="w-5 h-5" viewBox="0 0 512 512"><path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/></svg>
              <a :href="websiteLink" class="text-base font-medium leading-tight text-gray-900 dark:text-white">Website</a>
            </li>

          </ul>
        </div>
        <img :src="cover" alt="Project Cover" class="hidden mb-4 rounded-lg lg:mb-0 lg:flex w-full h-full object-cover">
      </div>
    </div>
  </section>
</template>

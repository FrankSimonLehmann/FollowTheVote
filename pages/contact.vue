<script setup>
import { ref } from 'vue'
const { $copyToClipboard } = useNuxtApp()

const toastMessage = ref('')

async function copyToClipboard(text) {
  try {
    await $copyToClipboard(text)
    showToast('Copied to clipboard!')
  } catch (error) {
    console.error('Failed to copy: ', error)
    showToast('Failed to copy.')
  }
}

function showToast(message) {
  toastMessage.value = message
  setTimeout(() => {
    toastMessage.value = ''
  }, 3000) // Hide the toast after 3 seconds
}
</script>

<style scoped>
.toast {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.75);
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  z-index: 1000;
  animation: fadeInOut 3s;
}

@keyframes fadeInOut {
  0%,
  100% {
    opacity: 0;
  }
  10%,
  90% {
    opacity: 1;
  }
}
</style>

<template>
  <!-- Start block -->
  <!-- Hero -->
  <section class="bg-gray-900">
    <div class="mx-auto grid max-w-screen-xl px-4 pb-8 pt-8 lg:grid-cols-12 lg:gap-8 lg:py-16 lg:pt-8 xl:gap-0">
      <div class="relative h-[calc(100vh/1.8)] rounded-xl bg-[url('/contact.jpg')] bg-cover bg-center lg:col-span-12">
        <div class="absolute inset-0 flex items-center justify-start rounded-lg bg-black bg-opacity-50">
          <div class="mx-10 text-left">
            <h1
              class="z-10 mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl xl:text-6xl"
            >
              Let's get in touch!
            </h1>
            <p class="z-10 max-w-2xl font-light text-gray-300 md:text-lg lg:mb-8 lg:text-xl">
              Become part of our team or start a new cooperation. We are always open for making new connections.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Problem/solution -->
  <section class="bg-secondary">
    <div class="mx-auto max-w-screen-xl space-y-12 px-4 py-8 lg:space-y-20 lg:px-6 lg:py-24">
      <div class="gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
        <div class="text-gray-500 sm:text-lg  text-color-tertiary">
          <h2 class="my-8">Do you want to become active ?</h2>
          <p class="mb-4 max-w-2xl">
            Instead of listening to politicians' promises, FollowTheVote keeps you up to date with what they're actually
            doing in Parliament. Through <a href="#" class="hover:underline">Mobile apps</a>
            <a href="#" class="hover:underline">Social Media</a> and <a href="#" class="hover:underline">Podcast</a>, we
            keep you up to date.
          </p>

          <!-- List -->
          <ul role="list" class="my-7 space-y-5 border-t border-gray-200 pt-8 dark:border-color-primary">
            <li class="flex items-center space-x-3">
              <!-- Icon -->
              <svg
                class="mb-2 h-8 w-8 text-purple-600 dark:text-purple-500"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                />
              </svg>
              <button class="btn-light" @click="copyToClipboard('+49 153234512')">+49 153234512</button>
              <div v-if="toastMessage" class="toast">{{ toastMessage }}</div>
            </li>
            <li class="flex items-center space-x-3">
              <!-- Icon -->
              <svg
                class="mb-2 h-8 w-8 text-purple-600 dark:text-purple-500"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                />
              </svg>
              <button class="btn-light" @click="copyToClipboard('franksimonlehmann@hotmail.com')">
                franksimonlehmann@hotmail.com
              </button>
            </li>
          </ul>
          <div></div>
        </div>
        <img src="/Frank Persona.jpg" alt="Maren Heinz" class="rounded-lg object-cover" />
      </div>
    </div>
  </section>
  <!-- Problem/solution -->
  <!-- Problem/solution -->
  <section class="bg-primary">
    <div class="mx-auto max-w-screen-xl space-y-12 px-4 py-8 lg:space-y-20 lg:px-6 lg:py-24">
      <div class="gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
        <div class="text-gray-500 sm:text-lg  text-color-tertiary">
          <h2 class="my-8">Question about the NGO ?</h2>
          <p class="mb-4 max-w-2xl">
            Instead of listening to politicians' promises, FollowTheVote keeps you up to date with what they're actually
            doing in Parliament. Through <a href="#" class="hover:underline">Mobile apps</a>
            <a href="#" class="hover:underline">Social Media</a> and <a href="#" class="hover:underline">Podcast</a>, we
            keep you up to date.
          </p>

          <!-- List -->

          <!-- List -->
          <ul role="list" class="my-7 space-y-5 border-t border-gray-200 pt-8 dark:border-color-primary">
            <li class="flex items-center space-x-3">
              <!-- Icon -->
              <svg
                class="mb-2 h-8 w-8 text-purple-600 dark:text-purple-500"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                />
              </svg>
              <button class="btn-light flex" @click="copyToClipboard('+49 153234512')">+49 153234512</button>
              <div v-if="toastMessage" class="toast">{{ toastMessage }}</div>
            </li>
            <li class="flex items-center space-x-3">
              <!-- Icon -->
              <svg
                class="mb-2 h-8 w-8 text-purple-600 dark:text-purple-500"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                />
              </svg>
              <button class="btn-light" @click="copyToClipboard('franksimonlehmann@hotmail.com')">
                marenheinz@followthvote.com
              </button>
            </li>
          </ul>

          <div></div>
        </div>
        <img src="/Maren.png" alt="Maren Heinz" class="rounded-lg object-cover" />
      </div>
    </div>
  </section>
  <!-- Problem/solution -->
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  cover: String,
  title: String,
  description: String,
  members: Array,
  articleId: Number,
})

console.log(props.articleId)
const router = useRouter()

const config = useAppConfig()

const navigateToArticle = () => {
  // Implement navigation logic here, for example:
  router.push(`/articles/${props.articleId}`)
}
</script>

<template>
  <div
    @click="navigateToArticle"
    class="mx-auto flex h-full min-w-96 max-w-lg cursor-pointer flex-col rounded-lg border border-gray-100 bg-white p-6 text-left  shadow xl:p-8 dark:border-gray-600 dark:bg-gray-800 text-color-primary"
  >
    <img :src="cover" alt="Article Cover" class="h-60 rounded-lg object-cover" />
    <h3 class="mb-2 mt-4 text-2xl font-semibold">{{ title.length > 50 ? title.slice(0, 50) + '...' : title }}</h3>
    <p>{{ description.length > 250 ? description.slice(0, 250) + '...' : description }}</p>
    <div class="flex-grow"></div>

    <!-- Member images container with wrapping enabled -->
    <div class="mt-4 flex flex-wrap items-center justify-start gap-2">
      <div class="rounded-full border" v-for="member in members" :key="member.id">
        <img
          :src="config.strapiBaseUrl + member.attributes.Portrait.data.attributes.url"
          :alt="`${member.attributes.First_name} ${member.attributes.Last_name}`"
          class="h-10 w-10 rounded-full object-cover"
        />
      </div>
    </div>

    <nuxt-link :to="`/articles/${articleId}`" class="btn-soft mt-4 inline-flex items-center" @click.stop>
      Read more
      <svg class="ml-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </nuxt-link>
  </div>
</template>

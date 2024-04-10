<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import ArticleTemplate from '../components/ArticleTemplate.vue'

const QUERY = `query {
    articles {
      data {
        id
      attributes {
        Cover {
          data {
            attributes {
              url
            }
          }
        }
        categories {
          data {
            attributes {
              Title
            }
          }
        }
        Title
        Description
        ReadingTime
        PublishingDate
        KeyPoints
        Body
        Video_url
        Sources
        members {
          data {
            attributes{
              First_name
              Last_name
              Portrait {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
      }
    }
  }
  `

const randomArticles = computed(() => {
  return articles.value
    .map((article) => ({ sort: Math.random(), value: article }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .slice(0, 3)
})

const data = ref({}) // Make 'data' a reactive reference
const config = useAppConfig()

async function fetchData() {
  const response = await fetch(`${config.strapiBaseUrl}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer d3b730221110fa33635326a0c7b3436ef63754f4356db9517c8fdbdf58632505910d2103802dcdb810813b26b444f29df73ecd986ffc89f469aba099bed1bb7903d4efacb321922fd22e5b4ce33de3819a4c544499c2e7824e01fb551a3d9ea0d44181c0602ec215f262b221b22bbdf7286d79e0e403626e0abd36ef58e9ff4f`, // Use your actual token
    },
    body: JSON.stringify({
      query: QUERY,
      variables: {},
    }),
  })

  data.value = await response.json()
}



onMounted(() => {
  fetchData()
})

const articles = computed(() => data.value.data?.articles?.data || [])
console.log(articles.attributes?.categories.data)
</script>

<template>
  <ArticleTemplate
    v-for="article in articles"
    :key="article.id"
    :title="article.attributes.Title || 'No Title Available'"
    :description="article.attributes.Description || 'Description not provided.'"
    :cover="
      article.attributes.Cover.data?.attributes.url
        ? `${config.strapiBaseUrl}${article.attributes.Cover.data.attributes.url}`
        : `${config.strapiBaseUrl}/uploads/default_cover_6d698f3d11.jpg`
    "
    :readingTime="article.attributes.ReadingTime || 'N/A'"
    :publishingDate="article.attributes.PublishingDate || 'Unknown'"
    :keyPoints="article.attributes.KeyPoints || null"
    :videoUrl="article.attributes.Video_url || ''"
    :body="article.attributes.Body || []"
    :sources="article.attributes.Sources || null"
    :members="article.attributes.members.data || []"
    :categories="article.attributes.categories.data"
  />

  <!-- Related articles -->
  <section class="bg-white dark:bg-gray-900">
    <div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6">
      <div class="mb-10 flex items-end justify-between">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Related articles</h2>
        <a href="#" class="btn-soft">
          All articles
          <svg class="ml-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
      <div class="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10">
        <ArticleCard
          v-for="article in randomArticles"
          :key="article.id"
          :title="article.attributes.Title"
          :description="article.attributes.Description"
          :cover="
            article.attributes.Cover.data?.attributes.url
              ? `${config.strapiBaseUrl}${article.attributes.Cover.data.attributes.url}`
              : `${config.strapiBaseUrl}/uploads/default_cover_6d698f3d11.jpg`
          "
          :members="article.attributes.members.data"
        />
      </div>
    </div>
  </section>
  <!-- Related articles -->
</template>

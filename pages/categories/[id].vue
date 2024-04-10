<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'

// Assuming the route param is 'categoryId'
const route = useRoute()
const categoryId = ref(route.params.id)

const QUERY = `query GetCategory($id: ID!) {
  category(id: $id) {
    data {
      id
      attributes {
        Title
        Description
        Cover {
          data {
            attributes {
              url
            }
          }
        }
        articles {
          data {
            id
            attributes {
              Title
              Description
              Cover {
                data {
                  attributes {
                    url
                  }
                }
              }
              members {
                data {
                  id
                  attributes {
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
    }
  }
}
`

const data = ref({}) // Make 'data' a reactive reference
const config = useAppConfig()

async function fetchData() {
  const response = await fetch(`${config.strapiBaseUrl}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer d3b730221110fa33635326a0c7b3436ef63754f4356db9517c8fdbdf58632505910d2103802dcdb810813b26b444f29df73ecd986ffc89f469aba099bed1bb7903d4efacb321922fd22e5b4ce33de3819a4c544499c2e7824e01fb551a3d9ea0d44181c0602ec215f262b221b22bbdf7286d79e0e403626e0abd36ef58e9ff4f`,
    },
    body: JSON.stringify({
      query: QUERY,
      variables: { id: categoryId.value },
    }),
  })

  data.value = await response.json()
}

onMounted(() => {
  fetchData()
})

const category = computed(() => data.value.data?.category?.data || [])
console.log(category.attributes?.Cover.data.attributes.url)
</script>


<template>
  <body>
  <section class="bg-gray-900">
  <div class="mx-auto grid max-w-screen-xl px-4 pb-8 pt-8 lg:grid-cols-12 lg:gap-8 lg:py-16 lg:pt-8 xl:gap-0">
    <div
      class="relative h-[calc(100vh/1.8)] rounded-xl bg-cover bg-center lg:col-span-12"
      :style="{ backgroundImage: `url(${category.attributes?.Cover.data.attributes.url ? config.strapiBaseUrl + category.attributes?.Cover.data.attributes.url : '/default-cover.jpg'})` }">
      <div class="absolute inset-0 flex items-center justify-start rounded-lg bg-black bg-opacity-50">
        <div class="mx-10 text-left">
          <h1 class="z-10 mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl xl:text-6xl">
            {{ category.attributes?.Title }}
          </h1>
          <p class="z-10 max-w-2xl font-light text-gray-300 md:text-lg lg:mb-8 lg:text-xl">
            {{ category.attributes?.Description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    <section class="bg-white dark:bg-gray-900">
      <div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6">
        <h3 class="mb-8 text-left text-2xl font-semibold">All articles</h3>
        <div
          v-if="category.attributes"
          class="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10"
        >
          <ArticleCard
            v-for="article in category.attributes.articles.data"
            :articleId="article.id"
            :key="article.id"
            :title="article.attributes.Title"
            :description="article.attributes.Description"
            :cover="config.strapiBaseUrl + article.attributes.Cover.data.attributes.url"
            :members="article.attributes.members.data"
          />
        </div>
      </div>
    </section>
  </body>
</template>

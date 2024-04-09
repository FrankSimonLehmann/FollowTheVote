<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue'

const QUERY = `query {
  categories {
    data {
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

async function fetchData() {
  const response = await fetch('http://localhost:1337/graphql', {
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

const categories = computed(() => data.value.data?.categories?.data || [])
</script>

<template>
  <body>
    <section class="bg-white dark:bg-gray-900">
      <div
        class="mx-auto grid max-w-screen-xl bg-gray-900 px-4 pb-8 pt-8 lg:grid-cols-12 lg:gap-8 lg:py-16 lg:pt-8 xl:gap-0"
      >
        <div class="relative h-[calc(100vh/2)] rounded-lg bg-[url('/writing.jpg')] bg-cover bg-center lg:col-span-12">
          <div class="absolute inset-0 flex items-center justify-start bg-black bg-opacity-50">
            <div class="ml-5 text-left">
              <h1
                class="z-10 mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl xl:text-6xl"
              >
                We write about<br />politics.
              </h1>
              <p class="z-10 mb-6 max-w-2xl font-light text-gray-300 md:text-lg lg:mb-8 lg:text-xl">
                Our articles are written by our team of experts and cover a wide range of topics, from the latest
                political news to the most pressing issues of our time. We also publish articles from guest writers who
                are experts in their field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white dark:bg-gray-900">
      <div class="mx-auto max-w-screen-xl px-4 lg:px-6">
        <div v-for="category in categories" :key="category.id">
          <div class="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-8 lg:pb-6 xl:gap-10">
            <!-- Add margin-top here, adjust mt-8 to the desired value -->

            <Categories
              :title="category.attributes.Title"
              :description="category.attributes.Description"
              :numberOfArticles="category.attributes.articles.data.length"
            />
            <div v-for="article in category.attributes.articles.data.slice(0, 2)" :key="article.id">
              <ArticleCard
                :title="article.attributes.Title"
                :description="article.attributes.Description"
                :cover="'http://localhost:1337' + article.attributes.Cover.data.attributes.url"
                :members="article.attributes.members.data"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </body>
</template>

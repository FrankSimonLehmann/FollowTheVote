<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue';

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
`;

const data = ref({}); // Make 'data' a reactive reference

async function fetchData() {
  const response = await fetch('http://localhost:1337/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer d3b730221110fa33635326a0c7b3436ef63754f4356db9517c8fdbdf58632505910d2103802dcdb810813b26b444f29df73ecd986ffc89f469aba099bed1bb7903d4efacb321922fd22e5b4ce33de3819a4c544499c2e7824e01fb551a3d9ea0d44181c0602ec215f262b221b22bbdf7286d79e0e403626e0abd36ef58e9ff4f` // Use your actual token
    },
    body: JSON.stringify({
      query: QUERY,
      variables: {}
    })
  });

  data.value = await response.json();
}

onMounted(() => {
  fetchData();
});

const categories = computed(() => data.value.data?.categories?.data || []);
console.log(categories)
console.log(data)

</script>

<template>
  <body>
    <section class="bg-gray-900">
      <div class=" grid max-w-screen-xl px-4 pt-8 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-8">
        <div class="rounded-xl lg:col-span-12 relative bg-cover bg-center h-[calc(100vh/1.8)] bg-[url('public/contact.jpg')]">
          <div class="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-start">
            <div class="mx-10 text-left">
              <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-white z-10">Jung. Schlau. Mitglied des Bundestags</h1>
              <p class="max-w-2xl font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl z-10">Unter diesem Motto starten wir mit FollowTheVote in ein neues Format. Wir finden für euch raus, wie die jungen Politiker:innen so ticken. Uns geht es darum, den Mensch hinter der/dem Politiker:in zu zeigen und herauszufinden, ob und wie junge Politiker:innen aller demokratischer Parteien die Interessen der Generation Y und Z vertreten.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white dark:bg-gray-900">
      <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6">
        <h3 class="mb-8 text-2xl font-semibold text-left">All articles</h3>
          <div v-for="category in categories" :key="category.id" class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            <ArticleCard
              v-for="article in category.attributes.articles.data"
              :key="article.id"
              :title="article.attributes.Title"
              :description="article.attributes.Description"
              :cover="'http://localhost:1337' + article.attributes.Cover.data.attributes.url"
              :members="article.attributes.members.data"
            />
          </div>
        </div>
      </section>
  </body>
</template>

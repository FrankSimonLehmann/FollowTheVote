<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue'

const QUERY = `query {
  members(pagination:{page:1,pageSize:60}) {
    data {
      attributes {
        First_name
        Last_name
        Description
        LinkedIn_url
        Portrait {
          data {
            attributes {
              url
            }
          }
        }
        projects {
          data {
            attributes{
              Logo {
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

const members = computed(() => data.value.data?.members?.data || [])
</script>

<template>
  <body>
    <section class=" bg-primary">
      <div
        class="mx-auto grid max-w-screen-xl bg-primary px-4 pb-8 pt-8 lg:grid-cols-12 lg:gap-8 lg:py-16 lg:pt-8 xl:gap-0"
      >
        <div class="relative h-[calc(100vh/2)] rounded-lg bg-[url('/team.jpg')] bg-cover bg-center lg:col-span-12">
          <div class="absolute inset-0 flex items-center justify-start rounded-lg bg-black bg-opacity-50">
            <div class="ml-5 text-left">
              <h1
                class="z-10 mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl xl:text-6xl"
              >
                Young, political and digital Europeans.
              </h1>
              <p class="z-10 mb-6 max-w-2xl font-light text-gray-300 md:text-lg lg:mb-8 lg:text-xl">
                Our projects would not be possible without our volunteers; they are the driving force behind every initiative. With a team constantly evolving, we foster a vibrant environment brimming with young talent. Ready to join us in making a difference?
              </p>
              <div class="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                <nuxt-link to="contact" class="btn"> Join the team </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class=" bg-primary">
      <div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-10">
        <div class="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10">
          <div v-for="member in members" :key="member.id">
            <Member
              :first_name="member.attributes.First_name"
              :last_name="member.attributes.Last_name"
              :description="member.attributes.Description"
              :profileImage="config.strapiBaseUrl + member.attributes.Portrait.data.attributes.url"
              :linkedIn="member.attributes.LinkedIn_url"
              :projects="
                member.attributes.projects.data.map(
                  (project) => config.strapiBaseUrl + project.attributes.Logo.data.attributes.url
                )
              "
            />
          </div>
        </div>
      </div>
    </section>
  </body>
</template>

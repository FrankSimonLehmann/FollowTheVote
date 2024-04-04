<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue';

const QUERY = `query {
  members {
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

const members = computed(() => data.value.data?.members?.data || []);

</script>


<template>
  <body>
  <section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 pt-8 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-8 bg-gray-900">
      <div class="rounded-lg lg:col-span-12 relative bg-cover bg-center h-[calc(100vh/2)] bg-[url('public/team.jpg')] ">
        <div class="rounded-lg absolute inset-0 bg-black bg-opacity-50 flex items-center justify-start">
          <div class="ml-5 text-left">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-white z-10">Young, political and digital Europeans. </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl z-10">Our articles are written by our team of experts and cover a wide range of topics, from the latest political news to the most pressing issues of our time. We also publish articles from guest writers who are experts in their field.</p>
            <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <a href="#" class="btn">Join the team</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        <section class="bg-white dark:bg-gray-900">
      <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-10 lg:px-6">
        <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <div v-for="member in members" :key="member.id">
            <Member
              :first_name="member.attributes.First_name"
              :last_name="member.attributes.Last_name"
              :description="member.attributes.Description"
              :profileImage="'http://localhost:1337' + member.attributes.Portrait.data.attributes.url"
              :linkedIn="member.attributes.LinkedIn_url"
              :projects="member.attributes.projects.data.map(project => 'http://localhost:1337' + project.attributes.Logo.data.attributes.url)"
            />
          </div>
        </div>
      </div>
    </section>
  </body>
</template>

<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue';

const QUERY = `query {
  articles {
    meta {
      pagination {
        total
      }
    }
    data {
      id
      attributes {
        Title
        Cover {
          data {
            id
            attributes {
              name
              width
              height
              ext
            }
          }
        }
      }
    }
  }
}`;

const data = ref({}); // Make 'data' a reactive reference

async function fetchData() {
  const response = await fetch(`${config.strapiBaseUrl}/graphql`, {
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

const articles = computed(() => data.value.data?.articles?.data || []);

console.log(articles)

</script>

<template>

  <div class="bg-slate-400 p-12">

    <h1>Strapi</h1>
    <div class="grid grid-cols-3 gap-5">
      <div v-for="article in articles" class="bg-red-400 p-12">
        {{article.attributes.Title}}
      </div>
    </div>
  </div>
</template>

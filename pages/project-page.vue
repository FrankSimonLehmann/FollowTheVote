<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import ProjectTemplate from '../components/ProjectTemplate.vue'; // Adjust the import to your ProjectTemplate component

const QUERY = `query {
  projects {
    data {
      attributes {
        Name
        Description
        Instagram_link
        Spotify_link
        Website_link
        Tiktok_link
        Youtube_link
        members {
          data {
            attributes {
              Portrait {
                data {
                  attributes {
                    url
                  }
                }
              }
              First_name
              Last_name
            }
          }
        }
        Cover {
          data {
            attributes {
              url
            }
          }
        }
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
}`;

const data = ref({}); // Make 'data' a reactive reference

async function fetchData() {
  const response = await fetch('http://localhost:1337/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Use your actual token
      Authorization: `Bearer d3b730221110fa33635326a0c7b3436ef63754f4356db9517c8fdbdf58632505910d2103802dcdb810813b26b444f29df73ecd986ffc89f469aba099bed1bb7903d4efacb321922fd22e5b4ce33de3819a4c544499c2e7824e01fb551a3d9ea0d44181c0602ec215f262b221b22bbdf7286d79e0e403626e0abd36ef58e9ff4f`
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

const projects = computed(() => data.value.data?.projects?.data || []);
</script>

<template>
  <div v-if="projects.length > 0">
    <ProjectTemplate
      :key="projects[0].id"
      :name="projects[0].attributes.Name || 'No Name Available'"
      :logo="projects[0].attributes.Logo?.data?.attributes.url ? `http://localhost:1337${projects[0].attributes.Logo.data.attributes.url}` : 'http://localhost:1337/uploads/default_logo.jpg'"
      :cover="projects[0].attributes.Cover?.data?.attributes.url ? `http://localhost:1337${projects[0].attributes.Cover.data.attributes.url}` : 'http://localhost:1337/uploads/default_cover.jpg'"
      :description="projects[0].attributes.Description || 'Description not provided.'"
      :instagramLink="projects[0].attributes.Instagram_link || ''"
      :tiktokLink="projects[0].attributes.Tiktok_link || ''"
      :websiteLink="projects[0].attributes.Website_link || ''"
      :spotifyLink="projects[0].attributes.Spotify_link || ''"
      :youtubeLink="projects[0].attributes.Youtube_link || ''"
      :members="projects[0].attributes.members?.data || []"
    />
  </div>
  <div v-else>
    <p>No projects available.</p>
  </div>
</template>


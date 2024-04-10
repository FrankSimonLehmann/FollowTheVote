<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue'

const QUERY = `query {
  projects(pagination:{page:1,pageSize:60}) {
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
      variables: {},
    }),
  })

  data.value = await response.json()
}

onMounted(() => {
  fetchData()
})

const projects = computed(() => data.value.data?.projects?.data || [])
</script>

<template>
  <Hero />

  <div v-for="(project, index) in projects" :key="project.id">
    <ProjectCardL
      v-if="index % 2 === 0"
      :name="project.attributes.Name || 'No Name Available'"
      :logo="
        project.attributes.Logo?.data?.attributes.url
          ? `${config.strapiBaseUrl}${project.attributes.Logo.data.attributes.url}`
          : `${config.strapiBaseUrl}/uploads/default_logo.jpg`
      "
      :cover="
        project.attributes.Cover?.data?.attributes.url
          ? `${config.strapiBaseUrl}${project.attributes.Cover.data.attributes.url}`
          : `${config.strapiBaseUrl}/uploads/default_cover_6d698f3d11.jpg`
      "
      :description="project.attributes.Description || 'Description not provided.'"
      :instagramLink="project.attributes.Instagram_link || ''"
      :tiktokLink="project.attributes.Tiktok_link || ''"
      :websiteLink="project.attributes.Website_link || ''"
      :spotifyLink="project.attributes.Spotify_link || ''"
      :youtubeLink="project.attributes.Youtube_link || ''"
      :members="project.attributes.members?.data || []"
    />
    <ProjectCardR
      v-else
      :name="project.attributes.Name || 'No Name Available'"
      :logo="
        project.attributes.Logo?.data?.attributes.url
          ? `${config.strapiBaseUrl}${project.attributes.Logo.data.attributes.url}`
          : `${config.strapiBaseUrl}/uploads/default_logo.jpg`
      "
      :cover="
        project.attributes.Cover?.data?.attributes.url
          ? `${config.strapiBaseUrl}${project.attributes.Cover.data.attributes.url}`
          : `${config.strapiBaseUrl}/uploads/default_cover_6d698f3d11.jpg`
      "
      :description="project.attributes.Description || 'Description not provided.'"
      :instagramLink="project.attributes.Instagram_link || ''"
      :tiktokLink="project.attributes.Tiktok_link || ''"
      :websiteLink="project.attributes.Website_link || ''"
      :spotifyLink="project.attributes.Spotify_link || ''"
      :youtubeLink="project.attributes.Youtube_link || ''"
      :members="project.attributes.members?.data || []"
    />
  </div>
</template>

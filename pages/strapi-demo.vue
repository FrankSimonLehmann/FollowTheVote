<script lang="ts" setup>
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
        Intro
        Image {
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
}`

const response = await fetch('http://localhost:1337/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer 8ab10f74db71cc2a3a53d5c433b56eebd42cce76020a08e76a0614f54363e60968d927a562569f0fb979c03c19a8747ff345161b63bcbcbe8715e152bbc7f9de325a561b5640244fb984d14cf49df05d194c95b1e2873df54b87e829d143cec8afc934fc4bfd46dc94d7d537017ef6afd708fb8fddc23dc92a0b2fe1c6deb0fc`
  },
  body: JSON.stringify({
    query: QUERY,
    variables: {}
  })
})

const data = await response.json()


console.log(data)
</script>

<template>
  <div class="bg-slate-400 p-12">
    <h1>Strapi</h1>
  </div>
</template>
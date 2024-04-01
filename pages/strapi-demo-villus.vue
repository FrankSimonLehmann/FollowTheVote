<script lang="ts" setup>
import gql from "graphql-tag"
import {useQuery} from "villus"
import StrapiParagraph from "~/components/StrapiParagraph.vue";

const { data } = await useQuery({
  query: gql`query {
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
        Content
      }
    }
  }
}`,
})

const articles = computed(() => data.value?.articles?.data || [])
</script>

<template>
  <div class="bg-slate-400 p-12">

    <h1>Strapi</h1>

    <div class="grid grid-cols-3 gap-5">
      <div v-for="article in articles" class="bg-red-400 p-12">
        {{article.attributes.Intro}}

        <template v-for="row in article.attributes.Content">
          <StrapiParagraph v-if="row.type === 'paragraph'" :value="row" />
        </template>
      </div>
    </div>
  </div>
</template>
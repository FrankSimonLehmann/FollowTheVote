<script lang="ts" setup>
const props = defineProps<{
  value: {
    type: string
    children: Array<{
      type: 'text'
      text: string
      level: number
    }>
  }
}>()

</script>

<template>
  <div>
    <h1 v-if="props.value.level === 1" >{{ props.value.children[0].text }}</h1>
    <h2 v-if="props.value.level === 2" >{{ props.value.children[0].text }}</h2>
    <h3 v-if="props.value.level === 3" >{{ props.value.children[0].text }}</h3>
    <h4 v-if="props.value.level === 4" >{{ props.value.children[0].text }}</h4>
  </div>

</template>

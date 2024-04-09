<script setup lang="ts">
const route = useRoute()

console.log(route.params.id)
</script>

<template>
  <div class="bg-[--primary-background]">
    <h1>{{ $route.params.id }}</h1>
  </div>
</template>

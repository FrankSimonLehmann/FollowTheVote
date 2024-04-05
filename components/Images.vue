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
    <!-- Conditionally render the image if the type is 'image' -->
    <div v-if="props.value.type === 'image' && props.value.image">
      <img
        :src="props.value.image.url"
        :alt="props.value.image.alternativeText || 'Image description missing'"
        :width="props.value.image.width"
        :height="props.value.image.height"
        class="max-w-full h-auto rounded-lg"
      >
      <figcaption v-if="props.value.image.caption">{{ props.value.image.caption }}</figcaption>
    </div>

    <!-- Optionally render text content from the children array -->
    <div v-for="(child, index) in props.value.children" :key="index">
      <p v-if="child.type === 'text'">{{ child.text }}</p>
    </div>
  </div>
</template>

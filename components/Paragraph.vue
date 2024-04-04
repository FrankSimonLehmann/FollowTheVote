<script lang="ts" setup>
const props = defineProps<{
  value: {
    type: string
    children: Array<{
      type: 'text'
      text: string
      code?: boolean
      bold?: boolean
      italic?: boolean
    }>
  }
}>()
</script>

<template>
  <p>
    <template v-for="(child, index) in props.value.children" :key="index">
      <span
        v-if="child.text !== ''"
        :style="{
          'font-weight': child.bold ? 'bold' : 'normal',
          'font-style': child.italic ? 'italic' : 'normal',
        }"
      >
        {{ child.text }}
      </span>
      <!-- Render a line break if the text is an empty string -->
      <!-- <br v-else /> -->
    </template>
  </p>
</template>

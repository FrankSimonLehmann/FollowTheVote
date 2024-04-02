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
    <span
        v-for="child in props.value.children"
        :style="{
          'font-weight': child.bold ? 'bold' : 'unset',
          'font-style': child.italic ? 'italic' : 'unset'
        }"
    >
      <template v-if="child.type === 'text'">
        {{ child.text }}
      </template>
    </span>
  </p>
</template>
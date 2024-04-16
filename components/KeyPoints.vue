<script lang="ts" setup>
import { defineProps } from 'vue'

interface TextNode {
  type: 'text'
  text: string
}

interface ListItemNode {
  type: 'list-item'
  children: TextNode[]
}

interface ListNode {
  type: 'list'
  format: 'unordered'
  children: ListItemNode[]
}

// Since your data is an array of ListNode
const props = defineProps<{
  value: ListNode[] | null
}>()
</script>

<template>
  <section class="bg-secondary">
    <div class="mx-auto max-w-screen-xl text-balance px-4 py-8 lg:px-6">
      <div class="mx-auto max-w-screen-md">
        <h2 class="text-color-primary mb-4 text-3xl font-bold">Key points</h2>
        <ul class="text-color-tertiary list-disc">
          <div v-if="props.value">
            <!-- Iterate over the array of lists -->
            <template v-for="(list, listIndex) in props.value" :key="`list-${listIndex}`">
              <ul v-if="list.type === 'list' && list.format === 'unordered'" class="text-color-tertiary list-disc">
                <!-- Iterate over the list items within each list -->
                <li v-for="(item, itemIndex) in list.children" :key="`item-${itemIndex}`" class="mb-2">
                  <!-- Finally, render the text content of each list item -->
                  <template v-for="(textNode, textIndex) in item.children" :key="`text-${textIndex}`">
                    <p v-if="textNode.type === 'text'">{{ textNode.text }}</p>
                  </template>
                </li>
              </ul>
            </template>
          </div>
        </ul>
      </div>
    </div>
  </section>
</template>

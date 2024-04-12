<script lang="ts" setup>
import { defineProps } from 'vue';

// Define the interfaces for your data structure
interface TextNode {
  type: 'text';
  text: string;
}

interface ListItemNode {
  type: 'list-item';
  children: TextNode[];
}

interface ListNode {
  type: 'list';
  format: 'unordered';
  children: ListItemNode[];
}

// The prop is a single ListNode, not an array
const props = defineProps<{
  value: ListNode | null;
}>();
</script>

<template>
        <!-- Only render if props.value is truthy and has the correct type and format -->
        <ul v-if="props.value && props.value.type === 'list' && props.value.format === 'unordered'" class="list-disc text-gray-500  text-color-tertiary">
          <!-- Iterate over the list items -->
          <li v-for="(item, itemIndex) in props.value.children" :key="`item-${itemIndex}`" class="mb-2">
            <!-- Render the text content of each list item -->
            <template v-for="(textNode, textIndex) in item.children" :key="`text-${textIndex}`">
              <p v-if="textNode.type === 'text'">{{ textNode.text }}</p>
            </template>
          </li>
        </ul>
</template>

<template>
  <button
    :class="{'p-4 border-b-2 uppercase font-medium': true}"
  >
    {{  tab.label }}
  </button>
</template>

<script setup lang='ts'>
import type { Tab } from '@/types'

defineProps<{
  currentTab: string
  tab: Tab
}>()

defineEmits<{
  click: []
}>()
</script>

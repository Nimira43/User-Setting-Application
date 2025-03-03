<template>
  <main class="max-w-2xl mx-auto px-4">
    <nav class="text-center text-main border-b border-medium mb-4">
      <ul class="flex-flex-wrap">
        <li 
          v-for="tab in tabs" :key="tab.key"
        >
          <TabLink />
        </li>
      </ul>
    </nav>

  </main>
</template>


<script setup lang='ts'>
import { ref } from 'vue'
import type { Tab, TabKey } from './types'
import TabLink from '@/components/Tablink.vue'

const tabs: Tab[] = [
  {
    key: 'General',
    label: 'General',
  },
  {
    key: 'Notifications',
    label: 'Notifications',
  },
  {
    key: 'Privacy',
    label: 'Privacy',
  }
]

const currentTab = ref<TabKey>('General')

</script>






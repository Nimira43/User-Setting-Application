<script setup lang='ts'>
import { ref } from 'vue'
import type { Tab } from './types'

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

const currentTab = ref<string>('')

</script>

<template>
  <div>
    <h1>User Settings Portal</h1>
  </div>
</template>




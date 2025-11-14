<template>
  <ul class="max-w-md space-y-1 text-body list-disc list-inside mt-10">
    <li v-for="item in items" :key="item">{{ item }}</li>
  </ul>
</template>

<script setup lang="ts">
defineProps<{ items: string[] }>();
</script>

<template>
  <div
    class="badge"
    :class="{ 'badge-primary': color === 'primary', 'badge-secondary': color === 'secondary' }"
  >
    {{ label }}
  </div>
</template>

<script setup lang="ts">
defineProps<{ label: string; color?: 'primary' | 'secondary' }>();
</script>

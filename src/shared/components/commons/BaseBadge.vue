<template>
  <div
    class="badge"
    :class="{ 'badge-primary': color === 'primary', 'badge-secondary': color === 'secondary' }"
  >
    <slot name="prefix" />
    {{ label }}
    <slot name="suffix" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ label: string; color?: 'primary' | 'secondary' }>();
</script>

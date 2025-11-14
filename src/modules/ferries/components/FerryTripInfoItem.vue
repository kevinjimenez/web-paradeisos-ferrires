<template>
  <section class="flex items-center gap-x-3">
    <slot />
    <div class="flex flex-col items-start">
      <p class="text-sm">{{ label }}</p>
      <p class="text-lg">{{ value }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ label: string; value: string }>();
</script>

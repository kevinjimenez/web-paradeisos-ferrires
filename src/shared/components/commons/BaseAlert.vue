<template>
  <section role="alert" class="alert alert-primary alert-soft border border-primary">
    <div class="flex flex-col">
      <span class="text-lg">{{ title }}</span>
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string }>();
</script>

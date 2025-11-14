<template>
  <section class="flex flex-row gap-x-2 mt-2">
    <BaseBadge v-for="service in services" :key="service" :label="service" color="primary" />
  </section>
</template>

<script setup lang="ts">
import BaseBadge from '@/shared/components/commons/BaseBadge.vue';
withDefaults(defineProps<{ services?: string[] }>(), {
  services: () => [],
});
</script>

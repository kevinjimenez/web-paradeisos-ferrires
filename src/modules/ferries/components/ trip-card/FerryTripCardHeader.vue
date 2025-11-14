<template>
  <section class="flex justify-between items-center">
    <h4 class="text-primary text-xl">{{ label }}</h4>
    <div class="flex justify-center gap-x-10 items-center">
      <BaseBadge :label="type" color="primary">
        <template #prefix>
          <AnchorIcon class="size-3" />
        </template>
      </BaseBadge>
      <div class="flex flex-col items-end">
        <h3 class="text-2xl">${{ value }}</h3>
        <p>por persona</p>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import BaseBadge from '@/shared/components/commons/BaseBadge.vue';
import AnchorIcon from '@/shared/components/icons/AnchorIcon.vue';

defineProps<{ label: string; value: number; type: string }>();
</script>

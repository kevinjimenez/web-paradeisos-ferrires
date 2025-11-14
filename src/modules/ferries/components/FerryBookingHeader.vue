<template>
  <section class="flex flex-row items-center gap-x-4">
    <BaseButton class="gap-x-5" @click="emit('clickBack')">
      <template #prefix>
        <ArrowBigLeftLinesIcon />
      </template>
      Volver
    </BaseButton>
    <section class="flex flex-col">
      <h1 class="text-3xl">{{ title }}</h1>
      <p class="text-sm">{{ subtitle }}</p>
    </section>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '@/shared/components/commons/BaseButton.vue';
import ArrowBigLeftLinesIcon from '@/shared/components/icons/ArrowBigLeftLinesIcon.vue';

defineProps<{ title: string; subtitle: string }>();
const emit = defineEmits(['clickBack']);
</script>

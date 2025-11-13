<template>
  <button
    :type="type"
    class="btn btn-primary"
    :class="[{ 'btn-circle': circle }]"
    @click="$emit('clickMe')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import type { BaseButtonProps } from '@/shared/interfaces';

withDefaults(defineProps<BaseButtonProps>(), {
  type: 'button',
  circle: false,
});

defineEmits(['clickMe']);
</script>

<style scoped />

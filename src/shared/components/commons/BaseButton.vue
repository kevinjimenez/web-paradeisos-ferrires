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
interface Props {
  type?: 'button' | 'submit' | 'reset';
  circle?: boolean;
}
withDefaults(defineProps<Props>(), {
  type: 'button',
  circle: false,
});

defineEmits(['clickMe']);
</script>

<style scoped />

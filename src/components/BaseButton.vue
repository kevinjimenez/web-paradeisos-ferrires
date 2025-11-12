<template>
  <button :type="type" class="btn btn-primary" @click="$emit('clickMe')">
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  type?: 'button' | 'submit' | 'reset';
}
withDefaults(defineProps<Props>(), {
  type: 'button',
});

defineEmits(['clickMe']);
</script>

<style scoped />

<template>
  <div>
    <textarea
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement)?.value ?? '')"
      @blur="$emit('blur')"
      :class="['form-control', { 'border-red-500': error }]"
    />
    <span v-if="error" class="text-red-500">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
import type { BaseTextAreaProps } from '@/shared/interfaces';

withDefaults(defineProps<BaseTextAreaProps>(), {
  type: 'text',
});

defineEmits(['update:modelValue', 'blur']);
</script>

<style scoped />

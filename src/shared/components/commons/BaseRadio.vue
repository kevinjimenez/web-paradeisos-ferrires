<template>
  <div class="flex gap-x-1 justify-center items-center">
    <input
      type="radio"
      :id="id"
      :name="name"
      :value="modelValue"
      :checked="modelValue === value"
      @change="$emit('update:modelValue', value)"
      @blur="$emit('blur')"
      :class="['radio radio-primary radio-xs', { 'border-secondary': error }]"
    />
    <label v-if="label" :for="id" class="cursor-pointer text-primary">
      {{ label }}
    </label>
    <span v-if="error" class="text-secondary text-sm">{{ error }} +1</span>
  </div>
</template>

<script setup lang="ts">
import type { BaseRadioProps } from '@/shared/interfaces';

withDefaults(defineProps<BaseRadioProps>(), {
  id: () => `radio-${Math.random().toString(36).substr(2, 9)}`,
});

defineEmits(['update:modelValue', 'blur']);
</script>

<style scoped />

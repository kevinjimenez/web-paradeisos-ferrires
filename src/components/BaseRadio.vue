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
interface Props {
  modelValue?: string | number;
  value: string | number | boolean;
  name: string;
  label?: string;
  error?: string;
  id?: string;
}

withDefaults(defineProps<Props>(), {
  id: () => `radio-${Math.random().toString(36).substr(2, 9)}`,
});

defineEmits(['update:modelValue', 'blur']);
</script>

<style scoped />

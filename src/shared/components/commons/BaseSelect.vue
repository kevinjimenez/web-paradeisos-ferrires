<!-- <template>
  <div class="flex flex-col items-start gap-2">
    <select
      :value="modelValue"
      @change="$emit('update:modelValue', ($event.target as HTMLSelectElement)?.value ?? '')"
      @blur="$emit('blur')"
      :class="['select select-primary w-full', { 'border-secondary': error }]"
    >
      <UsersIcon />
      <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
      <option
        v-for="option in options"
        :key="getOptionValue(option)"
        :value="getOptionValue(option)"
        :disabled="getOptionDisabled(option)"
      >
        {{ getOptionLabel(option) }}
      </option>
    </select>
    <span v-if="error" class="text-secondary text-sm">{{ error }}</span>
  </div>
</template> -->

<template>
  <fieldset class="fieldset">
    <legend v-if="label" class="fieldset-legend">{{ label }}</legend>
    <div class="relative w-full">
      <div class="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none z-10 text-gray-500">
        <slot />
      </div>
      <select
        :value="modelValue"
        @change="$emit('update:modelValue', ($event.target as HTMLSelectElement)?.value ?? '')"
        @blur="$emit('blur')"
        :class="['select select-primary w-full', { 'border-secondary': error, 'pl-10': hasIcon }]"
      >
        <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
        <option
          v-for="option in options"
          :key="getOptionValue(option)"
          :value="getOptionValue(option)"
          :disabled="getOptionDisabled(option)"
        >
          {{ getOptionLabel(option) }}
        </option>
      </select>
    </div>
    <p v-if="helperText && !error" class="label">{{ helperText }}</p>
    <span v-if="error" class="text-secondary text-xs">{{ error }}</span>
  </fieldset>
</template>

<script setup lang="ts">
import type { BaseSelectProps, SelectOption, SelectOptionItem } from '@/shared/interfaces';
import { computed, onMounted, useSlots } from 'vue';

const slots = useSlots();
const hasIcon = computed(() => !!slots.default);

const props = defineProps<BaseSelectProps>();

const emit = defineEmits(['update:modelValue', 'blur']);

const getOptionValue = (option: SelectOptionItem) => {
  if (typeof option === 'object') {
    if (typeof option.value !== 'object') {
      return option.value;
    } else {
      return (option.value as SelectOption).value as string | number;
    }
  } else {
    return option;
  }
};

const getOptionLabel = (option: SelectOptionItem) => {
  return typeof option === 'object' ? option.label : option;
};

const getOptionDisabled = (option: SelectOptionItem) => {
  return typeof option === 'object' && option.disabled ? true : false;
};

onMounted(() => {
  if (!props.placeholder && !props.modelValue && props.options.length > 0) {
    const firstValue = getOptionValue(props.options[0]!);
    emit('update:modelValue', firstValue);
  }
});
</script>

<style scoped />

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
import { computed, onMounted, useSlots } from 'vue';

interface Props {
  modelValue?: string | number;
  options: Array<
    | string
    | number
    | {
        label: string | { title: string; subtitle: string };
        value: string | number;
        disabled?: boolean;
      }
  >;
  placeholder?: string;
  error?: string;
  helperText?: string;
  label?: string;
}

const slots = useSlots();
const hasIcon = computed(() => !!slots.default);

const props = defineProps<Props>();

const emit = defineEmits(['update:modelValue', 'blur']);

const getOptionValue = (
  option:
    | string
    | number
    | { label: string | { title: string; subtitle: string }; value: string | number },
) => {
  return typeof option === 'object' ? option.value : option;
};

const getOptionLabel = (
  option:
    | string
    | number
    | { label: string | Record<string, string | number>; value: string | number },
) => {
  if (typeof option === 'object') {
    if (typeof option.label === 'string') {
      return option.label;
    } else {
      // Concatenate title and subtitle with a separator
      const title = option.label['title'] || '';
      const subtitle = option.label['subtitle'] || '';
      return subtitle ? `${title} (${subtitle})` : title;
    }
  }
  return option;
};

const getOptionDisabled = (
  option:
    | string
    | number
    | {
        label: string | { title: string; subtitle: string };
        value: string | number;
        disabled?: boolean;
      },
) => {
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

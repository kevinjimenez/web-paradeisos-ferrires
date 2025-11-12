<template>
  <div class="flex flex-col items-start gap-2">
    <select
      :value="modelValue"
      @change="$emit('update:modelValue', ($event.target as HTMLSelectElement)?.value ?? '')"
      @blur="$emit('blur')"
      :class="['select select-primary w-full', { 'border-secondary': error }]"
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
    <span v-if="error" class="text-secondary text-sm">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

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
}

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

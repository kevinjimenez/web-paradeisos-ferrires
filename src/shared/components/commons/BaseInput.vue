<!-- <template>
  <label class="input border border-gray-200 w-full gap-2">
    <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke-width="2.5"
        fill="none"
        stroke="currentColor"
      >
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
      </g>
    </svg>
    <input
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement)?.value ?? '')"
      @blur="$emit('blur')"
      :class="['grow', { 'border-secondary': error }]"
    />
  </label>
  <span v-if="error" class="text-secondary text-sm">{{ error }}</span>
</template>

<script setup lang="ts">
interface Props {
  modelValue?: string | number;
  error?: string;
  type?: 'text' | 'number' | 'date';
}

withDefaults(defineProps<Props>(), {
  type: 'text',
});

defineEmits(['update:modelValue', 'blur']);
</script> -->

<template>
  <fieldset class="fieldset">
    <legend v-if="label" class="fieldset-legend">{{ label }}</legend>
    <label class="input w-full gap-2" :class="[{ 'border-secondary border': error }]">
      <slot v-if="type !== 'date'" />
      <input
        :type="type"
        :min="min"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement)?.value ?? '')"
        @blur="$emit('blur')"
        :class="[{ 'date-input': type === 'date' }]"
      />
    </label>
    <p v-if="helperText && !error" class="label">{{ helperText }}</p>
    <span v-if="error" class="text-secondary text-xs">{{ error }}</span>
  </fieldset>
</template>

<script setup lang="ts">
interface Props {
  modelValue?: string | number;
  error?: string;
  type?: 'text' | 'number' | 'date';
  min?: string;
  label?: string;
  helperText?: string;
}

withDefaults(defineProps<Props>(), {
  type: 'text',
});

defineEmits(['update:modelValue', 'blur', 'input']);
</script>

<style scoped>
/* Mover icono de calendario nativo a la izquierda */
input[type='date']::-webkit-calendar-picker-indicator {
  position: absolute;
  left: 0.75rem;
  cursor: pointer;
}

input[type='date'] {
  position: relative;
  padding-left: 2.5rem;
}
</style>

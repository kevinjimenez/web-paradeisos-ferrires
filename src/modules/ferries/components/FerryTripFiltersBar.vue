<template>
  <section
    class="rounded-xl bg-white flex flex-row items-center gap-x-4 px-4 py-2 border border-gray-300"
  >
    <div class="flex flex-row items-center gap-x-4">
      <p>Ordenar por:</p>
      <BaseSelect
        v-model="orderBy"
        v-bind="orderByAttrs"
        :options="[
          {
            label: 'Precio (mayor a menor)',
            value: 'price_desc',
          },
          {
            label: 'Hora de salida',
            value: 'hour_exit',
          },
          {
            label: 'Duración',
            value: 'duration',
          },
          {
            label: 'Disponibilidad',
            value: 'disponibility',
          },
        ]"
      />
    </div>
    <div class="flex flex-row items-center gap-x-4">
      <p>Tipo:</p>
      <BaseSelect
        v-model="ferryType"
        v-bind="ferryTypeAttrs"
        :options="[
          {
            label: 'Todos',
            value: 'all',
          },
          {
            label: 'Lancha rapida',
            value: 'fast',
          },
          {
            label: 'Ferry',
            value: 'ferry',
          },
          {
            label: 'Lancha',
            value: 'lancha',
          },
        ]"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseSelect from '@/shared/components/commons/BaseSelect.vue';
import { useForm } from 'vee-validate';
import { watch } from 'vue';
import * as yup from 'yup';
import type { FerriesFilterValues } from '../interfaces/ferries-filter.interface';

const validationSchema = yup.object({
  orderBy: yup.string().required(),
  ferryType: yup.string().required(),
});

const { values, defineField } = useForm<FerriesFilterValues>({
  validationSchema,
});

const [orderBy, orderByAttrs] = defineField('orderBy');
const [ferryType, ferryTypeAttrs] = defineField('ferryType');

watch([() => values.orderBy, () => values.ferryType], () => {
  emit('change', {
    orderBy: values.orderBy,
    ferryType: values.ferryType,
  });
});

const emit = defineEmits<{
  // (e: 'change', payload: { orderBy: string; ferryType: string }): void;
  change: [payload: { orderBy: string; ferryType: string }];
}>();
</script>

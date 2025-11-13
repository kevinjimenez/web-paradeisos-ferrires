<template>
  <main class="container mx-auto flex flex-col gap-y-8 py-10">
    <section class="flex flex-row items-center gap-x-4">
      <BaseButton class="gap-x-5" @click="backPage">
        <template #prefix>
          <ArrowBigLeftLinesIcon />
        </template>
        Volver
      </BaseButton>
      <div class="flex flex-col">
        <h1 class="text-3xl">Santa Cruz => San Cristóbal</h1>
        <p class="text-sm">Domingo, 15 de noviembre de 2026 * 1 pasajero</p>
      </div>
    </section>

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

    <section
      v-for="n in 10"
      :key="n"
      class="rounded-xl bg-white flex flex-col gap-x-4 gap-y-2 p-8 border border-gray-300"
    >
      <div class="flex justify-between items-center">
        <h4 class="text-primary text-xl">Galapagos Express</h4>
        <div class="flex justify-center gap-x-10 items-center">
          <BaseBadge label="Lancha rapida" color="primary" />
          <div class="flex flex-col items-end">
            <h3 class="text-2xl">$35</h3>
            <p>por persona</p>
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center border-b border-gray-300 pb-10">
        <!-- time  -->
        <div class="flex items-center gap-x-3">
          <ClockIcon />
          <div class="flex flex-col items-start">
            <p class="text-sm">Salida</p>
            <p class="text-lg">10:00</p>
          </div>
        </div>

        <div class="flex items-center gap-x-3">
          <ClockIcon />
          <div class="flex flex-col items-start">
            <p class="text-sm">Llegada</p>
            <p class="text-lg">10:00</p>
          </div>
        </div>

        <div class="flex items-center gap-x-3">
          <MapPinIcon />
          <div class="flex flex-col items-start">
            <p class="text-sm">Duracion</p>
            <p class="text-lg">2h 30m</p>
          </div>
        </div>

        <div class="flex items-center gap-x-3">
          <UsersIcon />
          <div class="flex flex-col items-start">
            <p class="text-sm">Disponible</p>
            <p class="text-lg text-secondary">12 asientos</p>
          </div>
        </div>

        <BaseButton>Reservar</BaseButton>
      </div>
      <div class="flex flex-row gap-x-2 mt-2">
        <BaseBadge label="Lancha rapida" color="primary" />
        <BaseBadge label="Lancha rapida" color="primary" />
        <BaseBadge label="Lancha rapida" color="primary" />
        <BaseBadge label="Lancha rapida" color="primary" />
      </div>
    </section>

    <pre>
    {{ ferryStore.ferrySearchComputed }}
  </pre
    >
  </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useFerryStore } from '../stores/ferryStore';
import BaseButton from '@/shared/components/commons/BaseButton.vue';
import ArrowBigLeftLinesIcon from '@/shared/components/icons/ArrowBigLeftLinesIcon.vue';
import BaseSelect from '@/shared/components/commons/BaseSelect.vue';
import type { FerriesFilterValues } from '../interfaces/ferries-filter.interface';
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import { watch } from 'vue';
import BaseBadge from '@/shared/components/commons/BaseBadge.vue';
import ClockIcon from '@/shared/components/icons/ClockIcon.vue';
import MapPinIcon from '@/shared/components/icons/MapPinIcon.vue';
import UsersIcon from '@/shared/components/icons/UsersIcon.vue';

const validationSchema = yup.object({
  orderBy: yup.string().required(),
  ferryType: yup.string().required(),
});

const router = useRouter();
const ferryStore = useFerryStore();

const { values, defineField } = useForm<FerriesFilterValues>({
  validationSchema,
});

const [orderBy, orderByAttrs] = defineField('orderBy');
const [ferryType, ferryTypeAttrs] = defineField('ferryType');

watch([() => values.orderBy, () => values.ferryType], () => {
  console.log(values);
});

const backPage = () => {
  ferryStore.clearFerrySearch();
  router.back();
};
</script>

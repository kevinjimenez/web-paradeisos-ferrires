<template>
  <section class="min-h-screen flex items-center justify-center">
    <section class="flex flex-col">
      <section class="m-4 flex flex-col text-primary items-center justify-center gap-y-5">
        <h1 class="text-3xl">Explora las Islas Galápagos</h1>
        <h2 class="text-xl w-2/3 text-pretty text-center">
          Reserva tu viaje en ferry entre las islas más hermosas del mundo. Conectamos Santa Cruz,
          San Cristóbal e Isabela.
        </h2>
        <h3 class="text-lg">3 Islas Principales Salidas Diarias Cómodo y Seguro</h3>
      </section>
      <section class="m-4">
        <FerrySearchForm @submit="handleFormSubmit" />
      </section>
    </section>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import FerrySearchForm from '../components/FerrySearchForm.vue';
import { useFerryStore } from '../stores/ferryStore';
import type { FerrySearchFormValues } from '../interfaces';

const ferryStore = useFerryStore();
const router = useRouter();

const handleFormSubmit = (values: FerrySearchFormValues) => {
  ferryStore.setFerrySearch(values);
  router.push({ name: 'ferries' });
};
</script>

<template>
  <main class="container mx-auto flex flex-col gap-y-8 py-10">
    <FerryBookingHeader
      title="Santa Cruz → San Cristóbal"
      subtitle="Domingo, 15 de noviembre de 2026 · 1 pasajero"
      @clickBack="backPage"
    />

    <FerryTripFiltersBar @change="onChangeFilters" />

    <FerryTripCard
      @click="handleBooking"
      :trip="{
        label: 'Galápagos Express',
        value: 35,
        type: 'Ferry',
        services: ['wifi', 'Chaleco salvavidas', 'Guía', 'Equipo de snorkel'],
        departure: {
          label: 'Salida',
          value: '10:00',
        },
        arrival: {
          label: 'Llegada',
          value: '12:00',
        },
        duration: {
          label: 'Duración',
          value: '2h 30m',
        },
        available: {
          label: 'Disponible',
          value: '12',
        },
      }"
    />

    <BaseAlert class="p-5" title="Información importante">
      <BaseList
        :items="[
          'Llegue al puerto 30 minutos antes de la salida',
          'Traiga su identificación válida',
          'El equipaje está limitado a 20kg por persona',
          'Las condiciones del mar pueden afectar los horarios',
          'Cancelación gratuita hasta 24 horas antes',
        ]"
      />
    </BaseAlert>
  </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import FerryTripCard from '../components/ trip-card/FerryTripCard.vue';
import FerryBookingHeader from '../components/FerryBookingHeader.vue';
import FerryTripFiltersBar from '../components/FerryTripFiltersBar.vue';
import { useFerryStore } from '../stores/ferryStore';
import BaseAlert from '@/shared/components/commons/BaseAlert.vue';
import BaseList from '@/shared/components/commons/BaseList.vue';

const router = useRouter();
const ferryStore = useFerryStore();

const onChangeFilters = ({ orderBy, ferryType }: { orderBy: string; ferryType: string }) => {
  console.log(orderBy, ferryType);
};

const handleBooking = () => {
  console.log('handleBooking');
  router.push({ name: 'ferry-passenger' });
};

const backPage = () => {
  ferryStore.clearFerrySearch();
  router.back();
};
</script>

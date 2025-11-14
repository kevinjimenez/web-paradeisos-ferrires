<template>
  <main class="container mx-auto flex flex-col gap-y-8 py-10">
    <FerryBookingHeader
      title="Información de Pasajeros"
      subtitle="Santa Cruz → San Cristóbal · 1 Galápagos Express"
      @clickBack="backPage"
    />
  </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import FerryBookingHeader from '../components/FerryBookingHeader.vue';

const router = useRouter();

const backPage = () => {
  router.back();
};
</script>

<template>
  <footer class="py-6 bg-primary text-white">
    <div class="flex flex-row mx-auto justify-center items-center gap-x-20">
      <p class="text-white text-[1.2rem] w-40">Por qué reservar con Paradeisos?</p>
      <div class="border-l border-gray-400 h-28"></div>
      <div class="flex flex-row gap-x-5">
        <LikeIcon class="text-gray-400 size-6" />
        <div class="flex flex-col gap-y-5 w-40">
          <p class="text-white">+ 1000 CLIENTES</p>
          <p class="text-gray-400">Miles de clientes satisfechos con nuestros servicios</p>
        </div>
      </div>
      <div class="flex flex-row gap-x-5">
        icon
        <div class="flex flex-col gap-y-5 w-48">
          <p>PIONEROS EN VIAJES</p>
          <p>Somos la mejor agencia de turismo en asesoría, comodidad y precios.</p>
        </div>
      </div>
      <div class="flex flex-row gap-x-5">
        icon
        <div class="flex flex-col gap-y-5 w-52">
          <p>PAGOS EN LÍNEA SEGUROS</p>
          <p>Tus reservaciones y pagos están seguros en nuest plataforma.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import LikeIcon from './icons/LikeIcon.vue';
</script>

<template>
  <section class="flex justify-between items-center border-b border-gray-300 pb-10">
    <FerryTripInfoItem :label="departure.label" :value="departure.value">
      <ClockIcon />
    </FerryTripInfoItem>

    <FerryTripInfoItem :label="arrival.label" :value="arrival.value">
      <ClockIcon />
    </FerryTripInfoItem>

    <FerryTripInfoItem :label="duration.label" :value="duration.value">
      <MapPinIcon />
    </FerryTripInfoItem>

    <FerryTripInfoItem :label="available.label" :value="available.value">
      <UsersIcon />
    </FerryTripInfoItem>

    <BaseButton @click-me="$emit('click')">Reservar</BaseButton>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '@/shared/components/commons/BaseButton.vue';
import ClockIcon from '@/shared/components/icons/ClockIcon.vue';
import MapPinIcon from '@/shared/components/icons/MapPinIcon.vue';
import UsersIcon from '@/shared/components/icons/UsersIcon.vue';
import FerryTripInfoItem from '../FerryTripInfoItem.vue';

defineProps<{
  departure: { label: string; value: string };
  arrival: { label: string; value: string };
  duration: { label: string; value: string };
  available: { label: string; value: string };
}>();

defineEmits(['click']);
</script>

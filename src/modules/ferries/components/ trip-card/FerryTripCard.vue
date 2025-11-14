<template>
  <section class="rounded-xl bg-white flex flex-col gap-x-4 gap-y-2 p-8 border border-gray-300">
    <FerryTripCardHeader :label="trip.label" :value="trip.value" :type="trip.type" />
    <FerryTripCardDetails
      :departure="trip.departure"
      :arrival="trip.arrival"
      :duration="trip.duration"
      :available="trip.available"
      @click="$emit('click')"
    />
    <FerryTripCardTags :services="trip.services" />
  </section>
</template>

<script setup lang="ts">
import FerryTripCardDetails from './FerryTripCardDetails.vue';
import FerryTripCardHeader from './FerryTripCardHeader.vue';
import FerryTripCardTags from './FerryTripCardTags.vue';

defineProps<{
  trip: {
    label: string;
    value: number;
    type: string;
    services: string[];
    departure: { label: string; value: string };
    arrival: { label: string; value: string };
    duration: { label: string; value: string };
    available: { label: string; value: string };
  };
}>();
defineEmits(['click']);
</script>

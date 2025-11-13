import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { FerrySearchFormValues } from '../interfaces';

export const useFerryStore = defineStore('ferry', () => {
  const ferrySearch = ref<FerrySearchFormValues>({
    ticketType: 'one_way',
    from: '',
    to: '',
    departureDate: '',
    returnDate: '',
    numberPassengers: 1,
  });

  const ferrySearchComputed = computed(() => ferrySearch.value);

  const setFerrySearch = (values: FerrySearchFormValues) => {
    ferrySearch.value = values;
    console.log({ ferrySearch: ferrySearch.value });
  };

  return { ferrySearchComputed, setFerrySearch };
});

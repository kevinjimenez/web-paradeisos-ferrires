import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useFerryStore = defineStore('ferry', () => {
  // const count = ref(0);
  // const doubleCount = computed(() => count.value * 2);
  // const increment = () => {
  //   count.value++;
  //   console.log(count.value);
  // };

  const ferrySearch = ref({
    ticketType: 'one_way',
    from: '',
    to: '',
    departureDate: '',
    returnDate: '',
    numberPassengers: 1,
  });

  const ferrySearchComputed = computed(() => ferrySearch.value);

  // TODO: fix type
  const setFerrySearch = (values: any) => {
    ferrySearch.value = values;
    console.log({ ferrySearch: ferrySearch.value });
  };

  return { ferrySearchComputed, setFerrySearch };
});

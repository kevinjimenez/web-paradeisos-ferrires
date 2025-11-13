import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { FerrySearchFormValues } from '../interfaces';
import { INIT_FERRY_SEARCH_FORM } from '../constants';

export const useFerryStore = defineStore('ferry', () => {
  const ferrySearch = ref<FerrySearchFormValues>(INIT_FERRY_SEARCH_FORM);

  const ferrySearchComputed = computed(() => ferrySearch.value);

  const setFerrySearch = (values: FerrySearchFormValues) => {
    ferrySearch.value = values;
    console.log({ ferrySearch: ferrySearch.value });
  };

  const clearFerrySearch = () => {
    ferrySearch.value = INIT_FERRY_SEARCH_FORM;
    console.log('Ferry search cleared');
  };

  return { ferrySearchComputed, setFerrySearch, clearFerrySearch };
});

import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useFerryStore = defineStore('ferry', () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  const increment = () => {
    count.value++;
    console.log(count.value);
  };

  return { count, doubleCount, increment };
});

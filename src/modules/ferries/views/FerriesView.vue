<template>
  <main>Lista ferries</main>
  <pre>
    {{ ferryStore.ferrySearchComputed }}
  </pre>
</template>

<script setup lang="ts">
import { useFerryStore } from '../stores/ferryStore';

const ferryStore = useFerryStore();
</script>

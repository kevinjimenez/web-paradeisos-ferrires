<template>
  <main class="container mx-auto">
    <h1>Lista ferries</h1>
    <pre>
    {{ ferryStore.ferrySearchComputed }}
  </pre
    >
  </main>
</template>

<script setup lang="ts">
import { useFerryStore } from '../stores/ferryStore';

const ferryStore = useFerryStore();
</script>

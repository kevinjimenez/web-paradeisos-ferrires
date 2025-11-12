<template>
  <div class="min-h-screen bg-red-300">
    <!-- Top menu -->
    <TopMenu />

    <!-- Contend -->
    <main class="bg-primary">
      <RouterView />
    </main>

    <!-- Footer -->
    <!-- <div class="fixed bottom-0 left-0 right-0 z-50"> -->
    <CustomFooter />
    <!-- </div> -->
  </div>
</template>

<script setup lang="ts">
import CustomFooter from '@/components/CustomFooter.vue';
import TopMenu from '@/components/TopMenu.vue';
</script>

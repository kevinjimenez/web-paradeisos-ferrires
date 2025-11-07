<template>
  <div class="flex flex-col min-h-screen">
    <!-- Top menu -->
    <TopMenu />

    <!-- Contend -->
    <main class="flex-1 pb-24">
      <RouterView />
    </main>

    <!-- Footer -->
    <div class="fixed bottom-0 left-0 right-0 z-50">
      <CustomFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import CustomFooter from '@/components/CustomFooter.vue';
import TopMenu from '@/components/TopMenu.vue';
</script>

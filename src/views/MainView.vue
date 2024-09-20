<script setup lang="ts">
import VHeader from "@/components/BaseComponents/VHeader/VHeader.vue";
import VFooter from "@/components/BaseComponents/VFooter/VFooter.vue";
</script>

<template>
  <div class="wrapper">
    <main>
        <VHeader />
        <div class="container">
          <RouterView />
        </div>
    </main>
    <VFooter/>
  </div>
</template>
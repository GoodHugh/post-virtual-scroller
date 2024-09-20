<script setup lang="ts">

</script>

<template>
  <footer class="footer">
    {{ new Date().getFullYear() }}
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  background-color: gray;
  color: white;
}
</style>
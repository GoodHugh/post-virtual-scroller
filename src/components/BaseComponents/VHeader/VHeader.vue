<template>
  <header class="header">
    <div class="header__container container">
      <nav class="header__container-nav">
        <RouterLink to="/posts">Посты</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  background-color: gray;
  height: 80px;
  color: white;
  display: flex;
  align-items: center;
}

.header__container {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
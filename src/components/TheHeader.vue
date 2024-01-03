<template>
  <header>
    <router-link class="router" to="/products">PRODUTOS</router-link>
    <router-link class="router" to="/">HOME</router-link>
    <router-link class="router" to="/distributors">DISTRIBUIDORES</router-link>
  </header>
</template>

<style scoped>
header {
  max-width: 100%;
  border-bottom: 1px black solid;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2c9465;
  position: sticky;
  top: -1px;
  z-index: 999;
}
.router {
  margin-left: 80px;
  text-decoration: none;
  font-size: 2rem;
  color: #29332f;
}

.router:hover {
  color: #4f635a;
  transition: 0.75s;
}

.router:focus {
  color: #30fca0;
}

@media (max-width: 1050px) {
  header {
    height: 60px;
    position: -webkit-sticky;
    position: sticky;
    top: -1px;
  }
  .router {
    font-size: 1.5rem;
    margin-left: 30px;
  }
}

@media (max-width: 600px) {
  header {
    height: 60px;
    position: -webkit-sticky;
    position: sticky;
  }
  .router {
    font-size: 1rem;
    margin-left: 15px;
  }
}
</style>

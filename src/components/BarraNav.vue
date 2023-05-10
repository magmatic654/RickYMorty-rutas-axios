<script setup>
import { RouterLink } from 'vue-router'

</script>


<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container">
      

      <RouterLink to="/" class="navbar-brand">Rick y Morty</RouterLink>
      
      <div class="d-flex btn_NavRoutes">
        <RouterLink class="btn btn-outline-primary" to="/">Home</RouterLink>
        <RouterLink class="btn btn-outline-primary" to="/personajes/page=1">Personajes</RouterLink>
        <RouterLink class="btn btn-outline-primary" to="/favoritos">Favoritos</RouterLink>
      
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
    </div>

  </nav>
</template>
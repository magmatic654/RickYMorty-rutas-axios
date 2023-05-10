<script setup>
import { useFavoritosStore } from '../store/FavoritosStore';
import {storeToRefs} from 'pinia'
import CartaIlustrativa from '../components/CartaIlustrativa.vue';
const useFavoritos = useFavoritosStore()

const { favoritos } = storeToRefs(useFavoritos)


</script>

<template>

<div class="contenedorPaginacion">
  <h2 class="tituloRuta">Personajes Favoritos</h2>
  <div class="container">
  
  <p v-if="favoritos.length === 0">No hay favoritos agregados</p>


  <CartaIlustrativa v-for="carta in favoritos" 
  :name="carta.name" 
  :species="carta.species"
	:image="carta.image" 
  :status="carta.status"
  :id="carta.id"
  :btnAgregar="false">
  </CartaIlustrativa>
</div>
</div>
</template>
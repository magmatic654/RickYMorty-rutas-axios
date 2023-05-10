<script setup>

import CartaLoading from '../components/CartaLoading.vue'
import CartaIlustrativa from '../components/CartaIlustrativa.vue';
import { useGetData } from '../composables/getData.js'
import { useRouter, useRoute } from 'vue-router';
import { RouterLink } from 'vue-router';
import { ref, watchEffect } from 'vue';

const { data, errorData, loading, getData } = useGetData();

const router = useRouter()
const route = useRoute()

watchEffect(() => {
	getData(`https://rickandmortyapi.com/api/character?page=${route.params.page}`)
})

const paginaAnterior = ()=>{
	if(isNaN(route.params.page)){
		route.params.page = 1
	}else{
		router.push(`/personajes/page=${Number(route.params.page) - 1}`)
	}
}
const paginaSiguiente = ()=>{

	if(isNaN(route.params.page)){
		route.params.page = 1
	}else{
		router.push(`/personajes/page=${Number(route.params.page) + 1}`)
	}
}

</script>


<template>
	<h2 class="tituloRuta">Personajes</h2>

	<div v-if="errorData" class="errorData">
		<h1>Hubo un error</h1>
		
	</div>
	<div v-else>
		<div class="contenedorBtnPaginacion">
			<div v-if="route.params.page > 1" class="prevPage">

					<a @click="paginaAnterior" type="button" class="btn btn-outline-secondary" >Pagina Anterior
					</a>
			</div>

			<div v-if="data?.info.next" class="nextPage">

				
	
					<a @click="paginaSiguiente" type="button" class="btn btn-outline-secondary">Pagina Siguiente
					</a>

			</div>

		</div>
	
	<div class="container">
		<CartaLoading v-show="loading"></CartaLoading>
		<CartaIlustrativa 
			v-for="carta in data?.results" 
			:name="carta.name" 
			:species="carta.species"
			:image="carta.image" 
			:status="carta.status" 
			:btnAgregar="true" 
			:id="carta.id" 
			:key="carta.id"></CartaIlustrativa>
	</div>
	</div>
</template>
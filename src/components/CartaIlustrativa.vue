<script setup>
import { computed } from 'vue'
import { useFavoritosStore} from '../store/FavoritosStore';


const useFavoritos = useFavoritosStore();
const { add, remove, findCard } = useFavoritos;

const props = defineProps(
  {
  name: String,
  species: String,
  image: String,
  status: String,
  btnAgregar: Boolean,
  id: Number,
  },
)

const statusClass = computed(()=>{
  switch(props.status){
    case 'Alive':
      return 'Vivo';
    case 'Dead':
      return 'Muerto';
    default:
      return 'Desconocido';
  }
})
</script>

<template>
    <div class="card d-flex align-items-center">
  <img :src="image" class="card-img-top">
  
  <div class="informacionCarta">
    <h5>{{ name }}</h5>
    <p>Especie: <span>{{ species }}</span></p>
    <p>Estado: <span :class="statusClass" class="estado">{{ statusClass }}</span></p>
    <button v-if="btnAgregar" :disabled="findCard(props.name)" :class="findCard(props.name) ? 'agregado' : ''" class="btn btn-outline-warning" @click="add(props)">{{ findCard(props.name) ? 'Agregado' : 'Agregar a Favoritos' }}</button>
    <button v-else class="btn btn-outline-danger" @click="remove(props.id)">Eliminar</button>
  </div>

</div>
</template>



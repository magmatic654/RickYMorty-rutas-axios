import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoritosStore = defineStore('favoritos', ()=>{

  const favoritos = ref([])

  if(localStorage.getItem('favoritos')){
    favoritos.value = JSON.parse(localStorage.getItem('favoritos'))
  }
  
  const add = (favorito)=>{
    favoritos.value.push(favorito)
    localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
  }

  const remove = (id)=>{
    favoritos.value = favoritos.value.filter(item => item.id !== id)
    localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
  }  

  const findCard = name => favoritos.value.find(item => item.name === name)

  return {
    favoritos,
    add,
    remove,
    findCard,
  }
})
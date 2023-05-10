<script setup>

import { useRouter } from 'vue-router';
const router = useRouter()


const back = ()=>{
  router.push('/')
}

</script>

<template>
  <h1>Not Found</h1>

  <button
  @click="back"
  class="btn_volver">
  Volver
  </button>
</template>
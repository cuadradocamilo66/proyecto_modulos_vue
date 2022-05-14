<template>
  <v-container>
        <h1>EVALUACION MODULO</h1>
 <v-row
    align="center"
    justify="space-around"
  >
    <v-btn rounded
    color="blanco">
      Inicio
    </v-btn>

    <v-btn rounded
    color="blanco"> 
      Contenidos
    </v-btn>

    <v-btn rounded 
    color="blanco">
      Actividades
    </v-btn>

    <v-btn
      rounded
      color="verde"
    >
      Evaluación
    </v-btn>

    <v-btn
      rounded 
      color="blanco">
      Bibliografía
    </v-btn>
  </v-row>



         <v-col cols="12">
             <v-img
                :src="require('../assets/learning.svg')"
                position="center"
                class="my-4"
                 width="400"
             />
            <v-img
                :src="require('../assets/wave.svg')"
                class="my-4"
                contain
                 max-width="1250"
                 max-height="250"
             />

        </v-col>
    </v-container>

</template>

<script>
  import Evaluacion from '../components/Evaluacion'

  export default {
    name: 'Evaluacionn',

    components: {
      Evaluacion,
    },
  }
</script>
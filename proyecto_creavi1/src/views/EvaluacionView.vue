<template>
  <v-container>
        <h1></h1>
        <br>
         <v-row
          class="pt-10"
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
 


        <h1 class="letra-titulo"

            style= "font-size:100px; margin-top:80px;
                    margin-left:60px;
                    color: #4D4D4D;
                    font-family: 'Roboto', sans-serif;">Creavi
        </h1>

        <label 
              style= "font-size:30px; margin-top:-100px;
                    margin-left:60px;
                    color: #4D4D4D;
                    font-family: 'Roboto', sans-serif;">
            Crear evaluación para tu objeto 
        </label>
        <br>
        <label
            style= "font-size:30px; 
                    margin-left:60px;
                    color: #4D4D4D;
                    font-family: 'Roboto', sans-serif;">
            virtual de aprendizaje
        </label>
        <br>
        <v-btn 
        style="margin-left:60px"
            rounded
            color="verde"
        >
            Crear
        </v-btn>
      
                <v-img class="imagen1"
                    style="margin-left: 650px; margin-top:-240px"
                   :src="require('../assets/learning.svg')"
                   max-height="500"
                   max-width="500">
                 
                </v-img>
                   
            <v-img
                 style=" margin-top:-150px"
                :src="require('../assets/wave.svg')"
            
            
                 max-width="1250"
                 max-height="250"
             />

    
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
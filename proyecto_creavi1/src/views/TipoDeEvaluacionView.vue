<template >
  <v-container
        color: verde
        fill-height>

        <h2  style= "font-size:50px; margin-top:-500px;
                    margin-left:60px;
                    color: #FFFFFF;
                    font-family: 'Roboto', sans-serif;">
          Crear evaluación
        </h2>
        <br>
         <h2  style= "font-size:20px; margin-top:-340px;
                    margin-left:-360px;
                    color: #FFFFFF;
                    font-family: 'Roboto', sans-serif;">
          Seleccione el tipo de evaluación
        </h2>

        <div style="margin-left:-280px; margin-top:-130px">
             <p>{{ radios || 'null' }}</p>
          <v-radio-group
             v-model="radios"
              mandatory
              align-start justify-space-around column reverse fill-height
             
            >
          <v-radio 
         
            label="Opción múltiple con única respuesta"
            value="radio-1"
           
          >   
         </v-radio>
          <v-radio
            label="Falso y verdadero"
             value="radio-2"
          >
          </v-radio>
           <v-radio
            label="Completar el enunciado"
             value="radio-3"
          >
          </v-radio>
           <v-radio
            label="Unir con una línea"
             value="radio-4"
          >
          </v-radio>
    </v-radio-group>
  </div>
   <h2  style= "font-size:20px; margin-top:100px;
                    margin-left:-300px;
                    color: #FFFFFF;
                    font-family: 'Roboto', sans-serif;">
          Seleccione el valor de la pregunta
        </h2>
 <div  style="margin-top:200px; margin-left:-300px">
    <v-col cols="4">
      <v-select
       solo
        :items="items"
        :menu-props="{ top: true, offsetY: true }"
        label="1"
      ></v-select>
    </v-col>
  </div>

    <v-btn rounded
    color="blanco"
    style="margin-top:350px; margin-left:-230px">
      Crear
    </v-btn>
    <div>
      <v-img 
                    style="margin-left: 380px; margin-top:40px"
                   :src="require('../assets/teacher.svg')"
                   max-height="500"
                   max-width="500">
                 
                </v-img>
    </div>
  </v-container>



</template>

<script>
  import TipoDeEvaluacion from '../components/TipoDeEvaluacion'

  export default {
    name: 'TipoDeEvaluacionn',

    components: {
      TipoDeEvaluacion,
    },
  }
</script>
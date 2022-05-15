<template>
  <v-container
        color: verde
        >
      <div style="margin-top:0px">
          <h2  style= "font-size:40px;
                    margin-left:60px;
                    color: #FFFFFF;
                    font-family: 'Roboto', sans-serif;">
                Completar el enunciado
          </h2>
          <h2  style= "font-size:20px; 
                    margin-left:80px;
                    color: #FFFFFF;
                    font-family: 'Roboto', sans-serif;">
                Escriba el enunciado y seleccione las palabras a faltar:
          </h2>
      </div>
  </v-container>

</template>

<script>
  import CompletarEnunciado from '../components/CompletarEnunciado'

  export default {
    name: 'CompletarEnunciado',

    components: {
      CompletarEnunciado,
    },
  }
</script>
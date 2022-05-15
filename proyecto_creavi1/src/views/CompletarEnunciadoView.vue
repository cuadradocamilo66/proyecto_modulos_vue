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
           <div  style= "margin-left:100px; margin-top: 50px;">
                <v-textarea xs2
                 style="width:550px; "
                     solo
                    label="texto a completar"
                ></v-textarea>
        </div>
        <div style="margin-top:0px">
          <h2  style= "font-size:20px; 
                    margin-left:80px;
                    color: #FFFFFF;
                    font-family: 'Roboto', sans-serif;">
                Seleccione las palabras a ocultar:
          </h2>
        
      </div>

       <div style="display:flex; margin-top:240px">

        <div  style= "margin-left:100px; margin-top: 0px; ">
            <v-btn
              rounded 
              color="error">
              Atrás
            </v-btn>
        </div>
         <div  style= "margin-left:300px; margin-top: 0px; ">
            <v-btn
              rounded 
              color="primary">
              Finalizar
            </v-btn>
        </div>
        <div  style= "margin-left:300px; margin-top: 0px; ">
            <v-btn
              rounded 
              color="warning">
              Siguiente
            </v-btn>
        </div>
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
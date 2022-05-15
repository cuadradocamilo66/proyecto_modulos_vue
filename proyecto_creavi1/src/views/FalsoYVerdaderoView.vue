<template>
    <v-container
        color: verde
        >

        <div style="margin-top:0px">
            <h2  style= "font-size:40px;
                    margin-left:60px;
                    color: #FFFFFF;
                    font-family: 'Roboto', sans-serif;">
                Falso y verdadero
            </h2>
            <h2  style= "font-size:20px; 
                    margin-left:80px;
                    color: #FFFFFF;
                    font-family: 'Roboto', sans-serif;">
                Digite las preguntas, respuestas y seleccione la opción correcta    
            </h2>
        </div>

        <div  style= "margin-left:100px; margin-top: 50px;">
                <v-textarea xs2
                 style="width:550px; "
                     solo
                    label="Digite aquí la pregunta..."
                ></v-textarea>
        </div>
  <v-radio-group>
    <div style="display:flex">
       
          <div style="display:flex"> 
            <div  style= "margin-left:100px; margin-top: 0px;">
                <v-textarea xs2
                 style="width:200px; "
                     solo
                    label="Digite respuesta falsa"
                ></v-textarea>
             </div>
            <div style="margin-top: 60px; margin-left: 20px;">
                <v-radio
                     label=""
                    value="radio-2"
                    >
                </v-radio>
            </div>
        </div>

         <div style="display:flex"> 
            <div  style= "margin-left:100px; margin-top: 0px;">
                <v-textarea xs2
                 style="width:200px; "
                     solo
                    label="Digite respuesta verdadera"
                ></v-textarea>
             </div>
            <div style="margin-top: 60px; margin-left: 20px;">
                <v-radio
                     label=""
                    value="radio-3"
                    >
                </v-radio>
            </div>
            </div>
        </div>
    </v-radio-group>
     <div style="display:flex">

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
  import FalsoYVerdadero from '../components/FalsoYVerdadero'

  export default {
    name: 'FalsoYVerdadero',

    components: {
      FalsoYVerdadero,
    },
  }
</script>
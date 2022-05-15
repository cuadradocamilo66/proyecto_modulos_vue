<template>
    <v-container
        color: verde
        >
             <div style="margin-top:0px">
                    <h2  style= "font-size:40px;
                         margin-left:60px;
                        color: #FFFFFF;
                        font-family: 'Roboto', sans-serif;">
                        
                        Unir con una línea
                    </h2>
                    <h2  style= "font-size:20px; 
                            margin-left:80px;
                             color: #FFFFFF;
                            font-family: 'Roboto', sans-serif;">
                        Escriba las palabras que se puedan relacionar:
                    </h2>
             </div>

            <div style="display:flex">
                 <div  style= "margin-left:100px; margin-top: 40px; ">
                        <v-text-field
                             style= "width:200px"
                            label="Palabra 1"
                             placeholder="Escriba"
                             solo
                             rounded
                            dense >
                         </v-text-field>
                </div>
                   <div  style= "margin-left:100px; margin-top: 40px; ">
                        <v-text-field
                             style= "width:200px"
                            label="Palabra 2"
                             placeholder="Escriba"
                             solo
                             rounded
                            dense >
                         </v-text-field>
                </div>

            </div>
             <div style="margin-left:300px">
                    <v-btn
                        rounded 
                        color="primary">
                         Agregar
                    </v-btn>
                </div>
        <div style="display:flex; margin-top:360px">

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
  import UnirConLineas from '../components/UnirConLineas'

  export default {
    name: 'UnirConLineas',

    components: {
      UnirConLineas,
    },
  }
</script>
<template>
    <v-container>
        <h1> Bienvenido a nuestro trabajo de la Semana Tec! </h1>
        <h2> Debajo estará una lista a lo trabajado durante la semana </h2>
        <v-card style="padding:20px;"> <v-btn x-large @click="irAHome2"> Ir allá </v-btn> <body-1 style="font-size:20px;align:center;"> Home y Pokedex </body-1> </v-card>
        <v-card style="padding:20px;"> <v-btn x-large @click="irABitcoin"> Ir allá </v-btn> <body-1 style="font-size:20px;align:center;"> Cripto Chart </body-1> </v-card>
        <v-card style="padding:20px;"> <v-btn x-large @click="irATodo"> Ir allá </v-btn> <body-1 style="font-size:20px;align:center;"> Todo List </body-1> </v-card>
        <v-card style="padding:20px;"> <v-btn x-large @click="irACovid"> Ir allá </v-btn> <body-1 style="font-size:20px;align:center;"> Covid-19 en Latinoamérica </body-1> </v-card>
        <v-card style="padding:20px;"> <v-btn x-large @click="irAUserData"> Ir allá </v-btn> <body-1 style="font-size:20px;align:center;"> Interacción con Usuarios </body-1> </v-card>
    </v-container>
</template>

<script>
export default {
    methods:{
      irAHome2(){
        this.$router.push('/home2');
      },
      irABitcoin(){
        this.$router.push('/bitcoin');
      },
      irATodo(){
        this.$router.push('/todo');
      },
      irACovid(){
        this.$router.push('/covidd');
      },
      irAUserData(){
        this.$router.push('/userData');
      },
    },
}

</script>
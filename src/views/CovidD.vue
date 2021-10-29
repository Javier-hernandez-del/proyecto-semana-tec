<template>
    <v-container>
        <h2> Despliegue de Datos de COVID-19 en Latinoamérica </h2>
        <v-row style="margin-top:10px;">
            <v-col cols="12" md="4">
                <v-select
                :items="paises"
                item-text="name"
                v-model="selectedPais"
                item-value="id"
                label="Elige el país latinoamericano"
                outlined
                ></v-select>
            </v-col>
            <v-col cols="12" md="4">
                <v-select
                :items="estados"
                item-text="name"
                v-model="estado"
                item-value="id"                  
                label="Elige el tipo de dato que quieres ver:"
                outlined
                ></v-select>
            </v-col>                        
        </v-row>
        <v-row>
            <v-col cols="12">
                <CovidChart :pais="selectedPais" :estado="estado"/>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import CovidChart from '../components/CovidChart.vue'
export default {

    components:{
        CovidChart
    },
    data : () =>({
        selectedPais:null,
        estado:null,
        paises:[
            {
                id:"argentina",
                name:"Argentina"
            },
            {
                id:"belize",
                name:"Belice"
            },
            {
                id:"bolivia",
                name:"Bolivia"
            },
            {
                id:"brazil",
                name:"Brasil"
            },
            {
                id:"chile",
                name:"Chile"
            },
            {
                id:"colombia",
                name:"Colombia"
            },
            {
                id:"costa-rica",
                name:"Costa Rica"
            },
            {
                id:"cuba",
                name:"Cuba"
            },
            {
                id:"ecuador",
                name:"Ecuador"
            },
            {
                id:"el-salvador",
                name:"El Salvador"
            },
            {
                id:"guatemala",
                name:"Guatemala"
            },
            {
                id:"haiti",
                name:"Haití"
            },
            {
                id:"honduras",
                name:"Honduras"
            },
            {
                id:"mexico",
                name:"México"
            },
            {
                id:"nicaragua",
                name:"Nicaragua"
            },
            {
                id:"panama",
                name:"Panamá"
            },
            {
                id:"paraguay",
                name:"Paraguay"
            },
            {
                id:"peru",
                name:"Perú"
            },
            {
                id:"dominican-republic",
                name:"República Dominicana"
            },
            {
                id:"uruguay",
                name:"Uruguay"
            },
            {
                id:"venezuela",
                name:"Venezuela"
            }
        ],
        estados:[
            {
                id:"confirmed",
                name:"Casos Totales Confirmados"
            },
            {
                id:"deaths",
                name:"Muertes"
            }         
        ]       

    }),
}
</script>

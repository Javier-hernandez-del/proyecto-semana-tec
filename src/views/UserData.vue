<template>
    <v-container>
        <h2> Datos de Interacción Con Usuarios </h2>
        <v-row>
            <v-col cols="12">
                <FrequencyChart />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import FrequencyChart from '../components/FrequencyChart.vue'
export default {

    components:{
        FrequencyChart
    },
}
</script>

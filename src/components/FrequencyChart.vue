<template>
    <v-container>
            <v-progress-circular
      indeterminate
      color="primary"
      v-if="loading"
    ></v-progress-circular>

        <apexchart v-if="!loading" width="100%" type="bar" :options="options" :series="series"></apexchart>
    </v-container>
</template>

<script>
export default {
    methods:{

        async cargarDatos(){
            this.loading=true;
            var datosC = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
            var datosD = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
            await this.axios.get('https://backend-semana-tec-javier.herokuapp.com/covidd/list').then((response)=>{
                console.log(response);
                response.data.forEach(element => {
                    switch (element["pais"]) {
                        case "argentina":
                            if (element["estado"] == "confirmed") {
                                datosC[0] += 1;
                            } else {
                                datosD[0] += 1;
                            }
                            break;
                        case "belize":
                        if (element["estado"] == "confirmed") {
                                datosC[1] += 1;
                            } else {
                                datosD[1] += 1;
                            }
                            break;
                        case "bolivia":
                            if (element["estado"] == "confirmed") {
                                datosC[2] += 1;
                            } else {
                                datosD[2] += 1;
                            }
                            break;
                        case "brasil":
                        if (element["estado"] == "confirmed") {
                                datosC[3] += 1;
                            } else {
                                datosD[3] += 1;
                            }
                            break;
                        case "chile":
                        if (element["estado"] == "confirmed") {
                                datosC[4] += 1;
                            } else {
                                datosD[4] += 1;
                            }
                            break;
                        case "colombia":
                        if (element["estado"] == "confirmed") {
                                datosC[5] += 1;
                            } else {
                                datosD[5] += 1;
                            }
                            break;
                        case "costa-rica":
                        if (element["estado"] == "confirmed") {
                                datosC[6] += 1;
                            } else {
                                datosD[6] += 1;
                            }
                            break;
                        case "cuba":
                        if (element["estado"] == "confirmed") {
                                datosC[7] += 1;
                            } else {
                                datosD[7] += 1;
                            }
                            break;
                        case "ecuador":
                        if (element["estado"] == "confirmed") {
                                datosC[8] += 1;
                            } else {
                                datosD[8] += 1;
                            }
                            break;
                        case "el-salvador":
                        if (element["estado"] == "confirmed") {
                                datosC[9] += 1;
                            } else {
                                datosD[9] += 1;
                            }
                            break;
                        case "guatemala":
                        if (element["estado"] == "confirmed") {
                                datosC[10] += 1;
                            } else {
                                datosD[10] += 1;
                            }
                            break;
                        case "haiti":
                        if (element["estado"] == "confirmed") {
                                datosC[11] += 1;
                            } else {
                                datosD[11] += 1;
                            }
                            break;
                        case "honduras":
                        if (element["estado"] == "confirmed") {
                                datosC[12] += 1;
                            } else {
                                datosD[12] += 1;
                            }
                            break;
                        case "mexico":
                        if (element["estado"] == "confirmed") {
                                datosC[13] += 1;
                            } else {
                                datosD[13] += 1;
                            }
                            break;
                        case "nicaragua":
                        if (element["estado"] == "confirmed") {
                                datosC[14] += 1;
                            } else {
                                datosD[14] += 1;
                            }
                            break;
                        case "panama":
                        if (element["estado"] == "confirmed") {
                                datosC[15] += 1;
                            } else {
                                datosD[15] += 1;
                            }
                            break;
                        case "paraguay":
                        if (element["estado"] == "confirmed") {
                                datosC[16] += 1;
                            } else {
                                datosD[16] += 1;
                            }
                            break;
                        case "peru":
                        if (element["estado"] == "confirmed") {
                                datosC[17] += 1;
                            } else {
                                datosD[17] += 1;
                            }
                            break;
                        case "dominican-republic":
                        if (element["estado"] == "confirmed") {
                                datosC[18] += 1;
                            } else {
                                datosD[18] += 1;
                            }
                            break;
                        case "uruguay":
                        if (element["estado"] == "confirmed") {
                                datosC[19] += 1;
                            } else {
                                datosD[19] += 1;
                            }
                            break;
                        default:
                        if (element["estado"] == "confirmed") {
                                datosC[20] += 1;
                            } else {
                                datosD[20] += 1;
                            }
                            break;
                    }
                });


            })
            this.series = [{
                name: "Casos Confirmados",
                data: datosC
            },
            {
                name: "Muertes",
                data: datosD
            }]
            this.loading=false;
        },
        mounted() {
            this.cargarDatos();
        },
    },

    data: ()=>({
        loading:false,
        options: {
            xaxis: {
                categories: [
                    //21
                    "Argentina", "Belice", "Bolivia", "Brasil", "Chile", "Colombia",
                    "Costa Rica", "Cuba", "Ecuador", "El Salvador", "Guatemala", "Haiti",
                    "Honduras", "México", "Nicaragua", "Panamá", "Paraguay", "Perú",
                    "República Dominicana", "Uruguay", "Venezuela"
                ]
            },
        },
        series: [{
            name: 'Casos Confirmados',
            data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        },
        {
            name: 'Muertes',
            data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        }]
    })
}
</script>

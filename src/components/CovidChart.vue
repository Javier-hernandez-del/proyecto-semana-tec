<template>
    <v-container>
            <v-progress-circular
      indeterminate
      color="primary"
      v-if="loading"
    ></v-progress-circular>

        <apexchart v-if="!loading" width="100%" type="line" :options="options" :series="series" v-bind:key="series[0].data"></apexchart>
    </v-container>
</template>

<script>
export default {
    props: ['pais','estado'],

    watch:{
        series:function(newSeries,oldSeries){
            console.log(newSeries);
            console.log(oldSeries);
        },
        pais:function(newPais,oldPais){
            console.log(newPais)
            console.log(oldPais)
            this.cargarDatos();
        },
        estado:function(newEstado,oldEstado){
            console.log(newEstado)
            console.log(oldEstado)
            this.cargarDatos();
        }
    },
    methods:{

        async cargarDatos(){
            this.loading=true;
            //TODO implementar aquí su llamada deberemos cambiar la data de categories y de data
            var datos=[]
            var fechas=[]
            url = ""
            if (this.estado == "live") {
                url = 'https://api.covid19api.com/dayone/country/'+this.pais+'/status/confirmed/live'
            } else {
                url = 'https://api.covid19api.com/dayone/country/'+this.pais+'/status/'+this.estado
            }
            await this.axios.get(url).then((response)=>{
                console.log(response);
                response.data.prices.forEach(element => {
                    datos.push(element["Cases"])
                    fechas.push(element["Date"])
                });


            })
            this.options={
                xaxis:{
                    categories:fechas
                }
            }
            this.series = [{
                data: datos
            }]
            this.loading=false;
        }
    },

    data: ()=>({
        loading:false,
      options: {
        xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]
    })
}
</script>

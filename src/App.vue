<template>
  <div>
    <h1 class="title">Diversity</h1>
    <div style="display:flex;justify-content:center">
      <hexagon v-if="allChartData === null"/>
    </div>
    <div class="container" v-if="allChartData !== null">
      <ChartCard v-for="(chartData, index) in allChartData" :chartData=chartData :key="index" />
    </div>
  </div>
</template>

<script>
import ChartCard from './components/ChartCard.vue'
import { getData } from '@/helpers/fetch'
import parse from '@/helpers/parse'
import { Hexagon } from 'vue-loading-spinner'

export default {
  name: 'App',
  components: {
    ChartCard,
    Hexagon
  },
  data() {
    return {
      allChartData: null
    }
  },
  created() {
    getData().then( res => {
      this.allChartData = parse(res.data.records)
    })
  }
}
</script>

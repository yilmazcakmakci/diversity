<template>
  <div class="chart-container">
      <fusioncharts
        :type="type"
        :width="width"
        :height="height"
        :dataFormat="dataFormat"
        :dataSource="dataSource"
      >
      </fusioncharts>
  </div>
</template>

<script>
import chartTypes from '@/helpers/chart-type'

export default {
  name: 'ChartCard',
  props: {
    chartData: Object
  },
  data () {
    return {
      dataSource : {
        chart: {
          aligncaptionwithcanvas: "0",
          showlegend: "1",
          caption: this.chartData.title,
          theme: "candy",
        },
        data: this.chartData.data
      },
      type: chartTypes(this.chartData),
      width: '100%',
      height: '225',
      renderAt: "chart-container",
      dataFormat: "json",
    }
  }
}
</script>

import Vue from 'vue'
import App from './App.vue'
import VueFusionCharts from 'vue-fusioncharts'
import FusionCharts from 'fusioncharts'
import Charts from 'fusioncharts/fusioncharts.charts'
import Maps from 'fusioncharts/fusioncharts.maps'
import World from 'fusioncharts/maps/fusioncharts.world'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy'
import '@/style.scss'

Vue.use(VueFusionCharts, FusionCharts, Charts, Maps, World, FusionTheme)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

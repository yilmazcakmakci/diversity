import { mount } from '@vue/test-utils'
import ChartCard from '@/components/ChartCard.vue'

const data = {
  title: 'Gender',
  data: [
    {
      label: 'Man',
      value: 4
    },
    {
      label: 'Woman',
      value: 5
    }
  ]
}

describe('ChartCard.vue', () => {
  it('renders a chart container', () => {
    
    const wrapper = mount(ChartCard, {
      propsData: {
        chartData: data
      }
    })
    const svg = wrapper.find('.chart-container')
    
    expect(svg.exists()).toBe(true)
  })
})

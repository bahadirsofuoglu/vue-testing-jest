import RandomNumber from '@/components/RandomNumber'
import { mount } from '@vue/test-utils'
import { random } from 'core-js/fn/number'

describe('RandomNumber', () => {
  test('By default, random data value shold be 0 ', () => {
    const wrapper = mount(RandomNumber)
    expect(wrapper.html()).toContain('<span>0</span>')
  })

  test('If button is clicked, RandomNumber shold be between 1 and 10', async () => {
    const wrapper = mount(RandomNumber)
    wrapper.find('button').trigger('click')
    await wrapper.vm.$nextTick()
    const randomNumber = parseInt(wrapper.find('span').element.textContent)
    expect(randomNumber).toBeGreaterThanOrEqual(1)
    expect(randomNumber).toBeLessThanOrEqual(10)
  })
  test('If button is clicked, RandomNumber shold be between 200 and 300', () => {
    expect(true).toBe(false)
  })
})

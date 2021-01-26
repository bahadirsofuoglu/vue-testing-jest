import MessageContainer from '@/components/MessageContainer'
import { mount } from '@vue/test-utils'

describe('MessageContainer', () => {
  it('Wrap MessageDisplay Component', () => {
    const wrapper = mount(MessageContainer, {
      stubs: {
        MessageDisplay: '<p v-else data-testid="message">hello from DB</p>'
      }
    })
    const message = wrapper.find('[data-testid="message"]').element.textContent
    expect(message).toEqual('hello from DB')
  })
})

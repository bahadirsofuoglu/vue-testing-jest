import MessageContainer from '@/components/MessageContainer'
import { mount } from '@vue/test-utils'

describe('MessageContainer', () => {
  it('Wrap MessageDisplay Component', () => {
    const MessageDisplayMock0 = {
      template: '<p v-else data-testid="message">hello from DB</p>'
    }
    const wrapper = mount(MessageContainer, {
      stubs: {
        MessageDisplay: MessageDisplayMock0
      }
    })
    const message = wrapper.find('[data-testid="message"]').element.textContent
    expect(message).toEqual('hello from DB')
  })
})

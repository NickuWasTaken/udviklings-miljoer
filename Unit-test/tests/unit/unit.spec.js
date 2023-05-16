import { shallowMount } from '@vue/test-utils'
import Component from '../../src/components/file.vue'

describe('Test if input works', () => {
  it('Render', () => {
    const wrapper = shallowMount(Component, {
      data() {
        return {
          title: "cake",
        }
      }
    })
    expect(wrapper.find('#input').element.value).toEqual('cake')

  })
})
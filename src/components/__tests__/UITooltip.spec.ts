import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import UITooltip from '../UITooltip.vue'

describe('UITooltip', () => {
  it('renders the tip text in tooltip', () => {
    const wrapper = mount(UITooltip, {
      props: { tip: 'Tip text' },
    })

    const tooltip = wrapper.find('.tooltip')
    expect(tooltip.text()).toBe('Tip text')
  })
})

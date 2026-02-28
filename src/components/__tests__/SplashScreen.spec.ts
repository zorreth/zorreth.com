import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import SplashScreen from '../SplashScreen.vue'
import { nextTick } from 'vue'

describe('SplashScreen', () => {
  it('renders the text', () => {
    const wrapper = mount(SplashScreen)
    expect(wrapper.text()).toBe('zorreth')
  })

  it('changes font over time', async () => {
    vi.useFakeTimers()

    const wrapper = mount(SplashScreen)

    const fonts = [
      'Trade Winds',
      'Abril Fatface',
      'Merriweather Variable',
      'Fira Mono',
      'Kalam',
      'Poppins',
    ]

    expect(wrapper.element.style.fontFamily).toContain(fonts[0])

    vi.advanceTimersByTime(200)
    await nextTick()
    expect(wrapper.element.style.fontFamily).toContain(fonts[1])

    vi.advanceTimersByTime(200)
    await nextTick()
    expect(wrapper.element.style.fontFamily).toContain(fonts[2])

    vi.advanceTimersByTime(200 * fonts.length)
    await nextTick()
    expect(wrapper.element.style.fontFamily).toContain(fonts[2])

    vi.useRealTimers()
  })
})

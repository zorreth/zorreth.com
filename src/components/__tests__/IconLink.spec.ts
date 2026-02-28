import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import IconLink from '../IconLink.vue'
import DiscordIcon from '../icons/DiscordIcon.vue'
import GitHubIcon from '../icons/GitHubIcon.vue'

describe('IconLink', () => {
  it('renders Discord icon with "discord" icon prop', () => {
    const wrapper = mount(IconLink, {
      props: { icon: 'discord', href: 'https://discord.com' },
    })

    expect(wrapper.attributes('href')).toBe('https://discord.com')
    expect(wrapper.findComponent(DiscordIcon).exists()).toBe(true)
  })

  it('renders GitHub icon with "github" icon prop', () => {
    const wrapper = mount(IconLink, {
      props: { icon: 'github', href: 'https://github.com' },
    })

    expect(wrapper.attributes('href')).toBe('https://github.com')
    expect(wrapper.findComponent(GitHubIcon).exists()).toBe(true)
  })
})

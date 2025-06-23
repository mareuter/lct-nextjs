import type { Meta, StoryObj } from '@storybook/nextjs'

import Home from '@/app/page'

const meta: Meta<typeof Home> = {
  component: Home,
}

export default meta
type Story = StoryObj<typeof Home>

export const Standard: Story = {
  args: {},
}

import type { Meta, StoryObj } from '@storybook/nextjs'

import NextFourPhases from '@/app/ui/next_four_phases'

const meta: Meta<typeof NextFourPhases> = {
  component: NextFourPhases,
}

export default meta
type Story = StoryObj<typeof NextFourPhases>

export const Undefined: Story = {
  args: {
    phaseList: {},
  },
}

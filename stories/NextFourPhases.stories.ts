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
    timezone: '',
  },
}

export const Filled: Story = {
  args: {
    phaseList: {
      '0': { phase: 'full_moon', datetime: [2013, 10, 18, 23, 37, 39.633078] },
      '1': { phase: 'last_quarter', datetime: [2013, 10, 26, 23, 40, 28.739246] },
      '2': { phase: 'new_moon', datetime: [2013, 11, 3, 12, 49, 57.852996] },
      '3': { phase: 'first_quarter', datetime: [2013, 11, 10, 5, 57, 10.402442] },
    },
    timezone: 'America/New_York',
  },
}

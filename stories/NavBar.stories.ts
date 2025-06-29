import type { Meta, StoryObj } from '@storybook/nextjs'
// import { expect } from 'storybook/test'
// import { getRouter } from '@storybook/nextjs/navigation.mock';

import NavBar from '@/app/ui/nav_bar'

const meta: Meta<typeof NavBar> = {
  component: NavBar,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
}

export default meta
type Story = StoryObj<typeof NavBar>

export const Normal: Story = {}

// export const NavigateMoonInfo: Story = {
//     play: async ({ canvas, userEvent }) => {
//         const navLink = canvas.getByRole('link', { name: 'Moon Info Moon Info' })
//         await userEvent.click(navLink)
//         await expect(getRouter().push).toHaveBeenCalledWith('/moon_info')
//     }
// }

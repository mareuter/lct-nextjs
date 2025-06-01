import type { Meta, StoryObj } from "@storybook/nextjs";

import PhaseCard from "@/app/ui/phase_card";

const meta: Meta<typeof PhaseCard> = {
  component: PhaseCard,
};

export default meta;
type Story = StoryObj<typeof PhaseCard>;

export const Undefined: Story = {
  args: {
    phase_name: undefined,
    phase_date: "0000-00-00",
    phase_time: "00:00 UTC",
  },
};

export const FirstQuarter: Story = {
  args: {
    phase_name: "first_quarter",
    phase_date: "2024-10-20",
    phase_time: "23:43 UTC",
  },
};

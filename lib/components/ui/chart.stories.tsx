import type { Meta, StoryObj } from '@storybook/react'
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from './chart'
import { LineChart, CartesianGrid, XAxis, YAxis, Line } from 'recharts'

const meta: Meta<typeof ChartContainer> = {
  title: 'UI/Chart',
  component: ChartContainer,
  subcomponents: {
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
  },
  tags: ['autodocs'],
  args: {
    config: {
      desktop: { label: 'Desktop', color: 'var(--chart-1)' },
      mobile: { label: 'Mobile', color: 'var(--chart-2)' },
    } satisfies ChartConfig,
    className: '',
  },
  parameters: {
    controls: { exclude: ['className', 'style', 'ref', 'asChild'] },
  },
}

export default meta

type Story = StoryObj<typeof ChartContainer>

export const Basic: Story = {
  render: (args) => (
    <ChartContainer {...args}>
      <LineChart
        data={[
          { month: 'Jan', desktop: 186, mobile: 80 },
          { month: 'Feb', desktop: 305, mobile: 200 },
          { month: 'Mar', desktop: 237, mobile: 120 },
          { month: 'Apr', desktop: 73, mobile: 90 },
          { month: 'May', desktop: 209, mobile: 130 },
          { month: 'Jun', desktop: 214, mobile: 150 },
        ]}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Line
          type="monotone"
          dataKey="desktop"
          stroke="var(--color-desktop)"
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="mobile"
          stroke="var(--color-mobile)"
          strokeWidth={2}
          dot={false}
        />
        <ChartLegend content={<ChartLegendContent />} />
      </LineChart>
    </ChartContainer>
  ),
}

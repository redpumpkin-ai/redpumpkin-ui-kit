import type { Meta, StoryObj } from '@storybook/react'
import { Tag } from './tags'
import { X } from 'lucide-react'

const meta: Meta<typeof Tag> = {
  title: 'UI/Tag',
  component: Tag,
  tags: ['autodocs'],
  args: {
    children: 'Badges label',
    color: 'green',
    padding: 'md',
    size: 'md',
    variant: 'outline',
    showDot: false,
  },
  parameters: {
    controls: {
      exclude: ['className', 'style', 'ref', 'asChild', 'icon', 'dot'],
    },
  },
  argTypes: {
    color: {
      control: { type: 'radio' },
      options: [
        'green',
        'blue',
        'purple',
        'red',
        'orange',
        'teal',
        'neutral',
        'pink',
      ],
    },
    padding: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'radio' },
      options: ['default', 'outline', 'rounded'],
    },
    showDot: {
      control: { type: 'boolean' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Tag>

// Default story with dot indicator
export const Default: Story = {
  args: {
    showDot: true,
    color: 'green',
  },
}

// Color variants
export const Green: Story = {
  args: {
    color: 'green',
    showDot: true,
  },
}

export const Blue: Story = {
  args: {
    color: 'blue',
    showDot: true,
  },
}

export const Purple: Story = {
  args: {
    color: 'purple',
    showDot: true,
  },
}

export const Red: Story = {
  args: {
    color: 'red',
    showDot: true,
  },
}

export const Orange: Story = {
  args: {
    color: 'orange',
    showDot: true,
  },
}

export const Teal: Story = {
  args: {
    color: 'teal',
    showDot: true,
  },
}

export const Neutral: Story = {
  args: {
    color: 'neutral',
    showDot: true,
  },
}

export const Pink: Story = {
  args: {
    color: 'pink',
    showDot: true,
  },
}

// Padding variants
export const PaddingSmall: Story = {
  args: {
    padding: 'sm',
    showDot: true,
    children: 'Tag',
  },
}

export const PaddingMedium: Story = {
  args: {
    padding: 'md',
    showDot: true,
  },
}

export const PaddingLarge: Story = {
  args: {
    padding: 'lg',
    showDot: true,
  },
}

// Size variants
export const SizeSmall: Story = {
  args: {
    size: 'sm',
    showDot: true,
  },
}

export const SizeMedium: Story = {
  args: {
    size: 'md',
    showDot: true,
  },
}

export const SizeLarge: Story = {
  args: {
    size: 'lg',
    showDot: true,
    children: 'Large Tag',
  },
}

// Variant styles
export const Outline: Story = {
  args: {
    variant: 'outline',
    color: 'green',
    showDot: true,
  },
}

export const OutlineBlue: Story = {
  args: {
    variant: 'outline',
    color: 'blue',
    showDot: true,
  },
}

export const Rounded: Story = {
  args: {
    variant: 'rounded',
    color: 'green',
    showDot: true,
    children: 'Rounded',
  },
}

// Without dot
export const WithoutDot: Story = {
  args: {
    showDot: false,
    color: 'green',
  },
}

// With icon
export const WithIcon: Story = {
  args: {
    showDot: true,
    color: 'green',
    children: (
      <div className="flex items-center gap-1">
        <span>Badges label</span>
        <X className="size-3" />
      </div>
    ),
  },
}

// Multiple tags showcase
export const MultipleColors: Story = {
  args: {
    showDot: true,
  },
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag color="green" padding="md" showDot>
        Green
      </Tag>
      <Tag color="blue" padding="md" showDot>
        Blue
      </Tag>
      <Tag color="purple" padding="md" showDot>
        Purple
      </Tag>
      <Tag color="red" padding="md" showDot>
        Red
      </Tag>
      <Tag color="orange" padding="md" showDot>
        Orange
      </Tag>
      <Tag color="teal" padding="md" showDot>
        Teal
      </Tag>
      <Tag color="neutral" padding="md" showDot>
        Neutral
      </Tag>
      <Tag color="pink" padding="md" showDot>
        Pink
      </Tag>
    </div>
  ),
}

// Padding showcase
export const PaddingShowcase: Story = {
  args: {
    showDot: true,
    color: 'green',
  },
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag color="green" padding="sm" showDot>
        Small
      </Tag>
      <Tag color="green" padding="md" showDot>
        Medium
      </Tag>
      <Tag color="green" padding="lg" showDot>
        Large
      </Tag>
    </div>
  ),
}

// Size showcase
export const SizeShowcase: Story = {
  args: {
    showDot: true,
    color: 'green',
  },
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag color="green" size="sm" showDot>
        Small
      </Tag>
      <Tag color="green" size="md" showDot>
        Medium
      </Tag>
      <Tag color="green" size="lg" showDot>
        Large
      </Tag>
    </div>
  ),
}

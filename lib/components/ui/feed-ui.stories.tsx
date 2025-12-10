import type { Meta, StoryObj } from '@storybook/react'
import { Feed, FeedItem } from './feed-ui'

const meta: Meta<typeof Feed> = {
  title: 'UI/Feed',
  component: Feed,
  tags: ['autodocs'],
  subcomponents: { FeedItem },
  parameters: {
    controls: { exclude: ['className', 'style', 'ref'] },
  },
}

export default meta

type Story = StoryObj<typeof Feed>

const feedItems = [
  {
    header:
      'Deliver analytics-ready datasets with strong SQL and schema design (Star/Snowflake).',
    badge: {
      label: 'Score: 2/3',
      color: 'green' as const,
      variant: 'outline' as const,
    },
    timestamp: 'February 2024 - Now',
    detail:
      "The resume doesn't explicitly mention Star/Snowflake schema design. However, it does mention designing and building transactional data pipelines and improving data quality, implying a focus on delivering analytics-ready datasets. The lack of explicit mention of SQL skills is a minor drawback.",
    isActive: false,
    alignBadges: 'vertical' as const,
  },
  {
    header:
      'Deliver analytics-ready datasets with strong SQL and schema design (Star/Snowflake).',
    badge: {
      label: 'Score: 3/3',
      color: 'green' as const,
      variant: 'outline' as const,
    },
    timestamp: 'February 2024 - Now',
    detail:
      "The resume doesn't explicitly mention Star/Snowflake schema design. However, it does mention designing and building transactional data pipelines and improving data quality, implying a focus on delivering analytics-ready datasets. The lack of explicit mention of SQL skills is a minor drawback.",
    isActive: true,
    alignBadges: 'vertical' as const,
  },
  {
    header:
      'Deliver analytics-ready datasets with strong SQL and schema design (Star/Snowflake).',
    badge: {
      label: 'Score: 2/3',
      color: 'neutral' as const,
      variant: 'outline' as const,
    },
    timestamp: 'February 2024 - Now',
    detail:
      "The resume doesn't explicitly mention Star/Snowflake schema design. However, it does mention designing and building transactional data pipelines and improving data quality, implying a focus on delivering analytics-ready datasets. The lack of explicit mention of SQL skills is a minor drawback.",
    isActive: false,
    alignBadges: 'horizontal' as const,
  },
  {
    header:
      'Deliver analytics-ready datasets with strong SQL and schema design (Star/Snowflake).',
    badge: {
      label: 'Score: 3/3',
      color: 'neutral' as const,
      variant: 'outline' as const,
    },
    timestamp: 'February 2024 - Now',
    detail:
      "The resume doesn't explicitly mention Star/Snowflake schema design. However, it does mention designing and building transactional data pipelines and improving data quality, implying a focus on delivering analytics-ready datasets. The lack of explicit mention of SQL skills is a minor drawback.",
    isActive: true,
    alignBadges: 'horizontal' as const,
  },
]

// Default story showing the complete feed
export const Default: Story = {
  args: {
    items: feedItems,
  },
}

// Single inactive item with vertical badges
export const InactiveVertical: Story = {
  args: {
    items: [feedItems[0]],
  },
}

// Single active item with vertical badges
export const ActiveVertical: Story = {
  args: {
    items: [feedItems[1]],
  },
}

// Single inactive item with horizontal badges
export const InactiveHorizontal: Story = {
  args: {
    items: [feedItems[2]],
  },
}

// Single active item with horizontal badges
export const ActiveHorizontal: Story = {
  args: {
    items: [feedItems[3]],
  },
}

// Feed with all items
export const CompleteFeed: Story = {
  args: {
    items: feedItems,
  },
  render: (args) => (
    <div className="max-w-3xl">
      <Feed {...args} />
    </div>
  ),
}

// Feed with minimal data (no timestamps or details)
export const Minimal: Story = {
  args: {
    items: [
      {
        header: 'First milestone',
        isActive: false,
      },
      {
        header: 'Second milestone',
        isActive: true,
      },
      {
        header: 'Third milestone',
        isActive: false,
      },
    ],
  },
}

// Feed with only headers and badges
export const WithBadgesOnly: Story = {
  args: {
    items: [
      {
        header: 'Setup completed',
        badge: {
          label: 'Done',
          color: 'green',
        },
        isActive: true,
      },
      {
        header: 'Configuration in progress',
        badge: {
          label: 'In progress',
          color: 'neutral',
        },
        isActive: false,
      },
      {
        header: 'Pending tasks',
        isActive: false,
      },
    ],
  },
}

// Using FeedItem directly for more control
export const CustomFeedItem: Story = {
  render: () => (
    <div className="max-w-3xl space-y-4">
      <FeedItem
        header="Task 1: Initial setup"
        detail="This is the first step in the process"
        timestamp="Jan 1, 2024"
        badge={{
          label: 'Completed',
          color: 'green',
        }}
        isActive={true}
      />
      <FeedItem
        header="Task 2: Configuration"
        detail="Configure all necessary settings and parameters"
        timestamp="Jan 5, 2024"
        badge={{
          label: 'In Progress',
          color: 'neutral',
        }}
        isActive={false}
      />
      <FeedItem
        header="Task 3: Deployment"
        timestamp="Jan 10, 2024"
        isActive={false}
      />
    </div>
  ),
}

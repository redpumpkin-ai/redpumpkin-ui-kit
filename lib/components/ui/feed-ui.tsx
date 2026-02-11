import * as React from 'react'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Tag } from './tag'

interface FeedItemProps {
  timestamp?: string
  header: string
  detail?: string
  badge?: {
    label: string
    color?: 'green' | 'neutral'
    variant?: 'default' | 'outline'
  }
  isActive?: boolean
  alignBadges?: 'horizontal' | 'vertical'
  className?: string
}

/**
 * FeedItem - A single item in a feed timeline
 * Displays a title, optional badge, timestamp, and description
 */
const FeedItem = React.forwardRef<HTMLDivElement, FeedItemProps>(
  (
    {
      timestamp,
      header,
      detail,
      badge,
      isActive = false,
      alignBadges = 'vertical',
      className,
    },
    ref
  ) => {
    const lineBar = <div className="h-6 w-0.5 shrink-0 border" />
    const lineBarExpand = (
      <div className="min-h-px w-0.5 min-w-px shrink-0 grow basis-0 border" />
    )

    return (
      <div ref={ref} className={cn('flex w-full items-start gap-6', className)}>
        {/* Timeline */}
        <div className="flex shrink-0 flex-col items-center justify-center self-stretch">
          {lineBar}
          {/* Dot/Icon container */}
          <div className="flex shrink-0 items-center gap-4">
            <div
              className={cn(
                'flex shrink-0 items-center justify-center gap-4 rounded-[6px] p-1',
                isActive && 'bg-material-high-contrast-blue rounded-full'
              )}
            >
              {isActive ? (
                <Check className="h-3 w-3 shrink-0 text-white" />
              ) : (
                <div className="bg-border size-3 shrink-0 rounded-full" />
              )}
            </div>
          </div>
          {lineBarExpand}
        </div>

        {/* Content */}
        <div className="flex min-h-px min-w-px shrink-0 grow basis-0 flex-col gap-4 px-0 py-6">
          {/* Header with badge */}
          <div className="flex w-full shrink-0 items-start gap-3">
            {alignBadges === 'vertical' ? (
              <div className="flex min-h-px min-w-px shrink-0 grow basis-0 flex-col items-start gap-2">
                <p className="text-foreground text-base leading-tight font-medium tracking-tight wrap-break-word whitespace-normal">
                  {header}
                </p>
                {badge && (
                  <Tag
                    color={badge.color || 'green'}
                    padding="md"
                    className={cn('shrink-0')}
                    variant={badge.variant || 'default'}
                  >
                    {badge.label}
                  </Tag>
                )}
              </div>
            ) : (
              <div className="flex min-h-px min-w-px shrink-0 grow basis-0 items-center gap-2 overflow-clip">
                <p className="text-foreground text-base leading-tight font-medium tracking-tight whitespace-nowrap">
                  {header}
                </p>
                {badge && (
                  <Tag
                    color={badge.color || 'neutral'}
                    padding="md"
                    className={cn('shrink-0')}
                    variant={badge.variant || 'default'}
                  >
                    {badge.label}
                  </Tag>
                )}
              </div>
            )}
            {timestamp && (
              <p className="text-muted-foreground text-xs tracking-tight whitespace-nowrap">
                {timestamp}
              </p>
            )}
          </div>

          {/* Detail text */}
          {detail && (
            <p className="text-muted-foreground w-full text-sm leading-relaxed tracking-tight">
              {detail}
            </p>
          )}
        </div>
      </div>
    )
  }
)

FeedItem.displayName = 'FeedItem'

/**
 * Feed - A timeline feed component with multiple items
 */
interface FeedProps {
  items: FeedItemProps[]
  className?: string
}

const Feed = React.forwardRef<HTMLDivElement, FeedProps>(
  ({ items, className }, ref) => {
    return (
      <div ref={ref} className={cn('flex flex-col', className)}>
        {items.map((item, index) => (
          <FeedItem key={index} {...item} />
        ))}
      </div>
    )
  }
)

Feed.displayName = 'Feed'

export { Feed, FeedItem }
export type { FeedProps, FeedItemProps }

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const tagVariants = cva(
  'inline-flex items-center justify-center rounded-[6px] border border-solid text-xs font-normal w-fit whitespace-nowrap shrink-0 gap-1 [&>svg]:size-3 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden',
  {
    variants: {
      color: {
        green:
          'border-material-high-contrast-green bg-bg-hc-green/60 text-highcontrast-text-green',
        blue: 'border-material-high-contrast-blue bg-bg-hc-blue/60 text-highcontrast-text-blue',
        purple:
          'border-material-high-contrast-purple bg-bg-hc-purple/60 text-highcontrast-text-purple',
        red: 'border-material-high-contrast-red bg-bg-hc-red text-highcontrast-text-red',
        orange:
          'border-material-high-contrast-orange bg-bg-hc-orange/60 text-highcontrast-text-orange',
        teal: 'border-material-high-contrast-teal bg-bg-hc-teal text-highcontrast-text-teal',
        neutral:
          'border-material-high-contrast-neutral bg-bg-hc-neutral/60 text-highcontrast-text-neutral',
        pink: 'border-material-high-contrast-pink bg-bg-hc-pink text-highcontrast-text-pink',
      },
      padding: {
        sm: 'px-1.5 py-0',
        md: 'px-2 py-0.5',
        lg: 'px-3 py-1.5',
      },
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      },
      variant: {
        default: '',
        outline: 'border-transparent',
        rounded: 'rounded-full border-transparent',
      },
      icon: {
        true: '[&>svg]:flex [&>svg]:size-2',
        false: '[&>svg]:hidden',
      },
      dot: {
        true: '',
        false: '',
      },
    },
    defaultVariants: {
      color: 'green',
      padding: 'md',
      size: 'md',
      variant: 'default',
      icon: false,
      dot: false,
    },
  }
)

interface TagProps
  extends
    Omit<React.ComponentProps<'span'>, 'color'>,
    VariantProps<typeof tagVariants> {
  asChild?: boolean
  showDot?: boolean
}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      className,
      color = 'green',
      padding = 'md',
      size = 'md',
      variant = 'default',
      icon = false,
      dot = false,
      showDot,
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'span'

    return (
      <Comp
        ref={ref}
        data-slot="tag"
        className={cn(
          tagVariants({ color, padding, size, variant, icon, dot }),
          className
        )}
        {...props}
      >
        {showDot && (
          <div
            className={cn('size-2 shrink-0 rounded-full', {
              'bg-material-high-contrast-green': color === 'green',
              'bg-material-high-contrast-blue': color === 'blue',
              'bg-material-high-contrast-purple': color === 'purple',
              'bg-material-high-contrast-red': color === 'red',
              'bg-material-high-contrast-orange': color === 'orange',
              'bg-material-high-contrast-teal': color === 'teal',
              'bg-material-high-contrast-neutral': color === 'neutral',
              'bg-material-high-contrast-pink': color === 'pink',
            })}
          />
        )}
        {children}
      </Comp>
    )
  }
)

Tag.displayName = 'Tag'

export { Tag, tagVariants }
export type { TagProps }

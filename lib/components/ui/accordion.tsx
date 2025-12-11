import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDownIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn('border-b border-neutral-200 last:border-b-0', className)}
      {...props}
    />
  )
}

interface AccordionTriggerProps extends React.ComponentProps<
  typeof AccordionPrimitive.Trigger
> {
  badge?: string
}

function AccordionTrigger({
  className,
  children,
  badge,
  ...props
}: AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          'focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 px-4 py-4 text-left font-medium transition-all outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180',
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-4">
          <span className="text-base font-medium text-neutral-900">
            {children}
          </span>
          {badge && (
            <span className="font-regular inline-flex items-center rounded bg-green-100 px-1.5 py-0.5 text-xs whitespace-nowrap text-green-700">
              {badge}
            </span>
          )}
        </div>
        <ChevronDownIcon className="pointer-events-none size-6 shrink-0 text-neutral-600 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden px-4 text-sm"
      {...props}
    >
      <div
        className={cn(
          'pb-4 text-sm leading-relaxed text-neutral-500',
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

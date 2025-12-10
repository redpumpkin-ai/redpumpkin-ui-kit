import type { Meta, StoryObj } from '@storybook/react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from './form'
import { Input } from './input'
import { Textarea } from './textarea'
import { Checkbox } from './checkbox'
import { Button } from './button'

const meta = {
  title: 'UI/Form',
  component: Form,
  subcomponents: {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
  },
  tags: ['autodocs'],
  parameters: {
    controls: { exclude: ['className', 'style', 'ref', 'asChild'] },
  },
} satisfies Meta<typeof Form>

export default meta

type Story = StoryObj<typeof Form>

const schema = z.object({
  email: z.string().email(),
  bio: z.string().min(10),
  terms: z.boolean().refine((v) => v === true, {
    message: 'You must accept the terms',
  }),
})

function FormDemo() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { email: '', bio: '', terms: false },
  })

  const onSubmit = (values: z.infer<typeof schema>) => {
    console.log('onSubmit', values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid w-full max-w-md gap-6"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="you@example.com" {...field} />
              </FormControl>
              <FormDescription>We will not share your email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea placeholder="Tell us about yourself" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    id="terms"
                  />
                  <label htmlFor="terms">Accept terms and conditions</label>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export const Basic: Story = {
  render: () => <FormDemo />,
}

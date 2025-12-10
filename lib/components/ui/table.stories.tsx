import type { Meta, StoryObj } from '@storybook/react'
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from './table'

const meta: Meta<typeof Table> = {
  title: 'UI/Table',
  component: Table,
  subcomponents: {
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
    TableCaption,
  },
  tags: ['autodocs'],
  parameters: {
    controls: { exclude: ['className', 'style', 'ref', 'asChild'] },
  },
}

export default meta

type Story = StoryObj<typeof Table>

export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>A list of recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>INV002</TableCell>
          <TableCell>Pending</TableCell>
          <TableCell className="text-right">$500.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>INV003</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell className="text-right">$300.00</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell className="text-right">$1,050.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
}

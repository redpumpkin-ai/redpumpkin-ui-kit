import type { Meta, StoryObj } from "@storybook/react";
import {
  FieldSet,
  FieldLegend,
  FieldGroup,
  Field,
  FieldLabel,
  FieldContent,
  FieldDescription,
  FieldSeparator,
  FieldError,
  FieldTitle,
} from "./field";
import { Input } from "./input";
import { Textarea } from "./textarea";

const meta = {
  title: "UI/Field",
  component: FieldSet,
  subcomponents: {
    FieldLegend,
    FieldGroup,
    Field,
    FieldLabel,
    FieldContent,
    FieldDescription,
    FieldSeparator,
    FieldError,
    FieldTitle,
  },
  tags: ["autodocs"],
  parameters: {
    controls: { exclude: ["className", "style", "ref", "asChild"] },
  },
} satisfies Meta<typeof FieldSet>;

export default meta;

type Story = StoryObj<typeof FieldSet>;

export const Default: Story = {
  render: () => (
    <FieldSet>
      <FieldLegend>Profile</FieldLegend>
      <FieldGroup>
        <Field>
          <FieldLabel>Name</FieldLabel>
          <FieldContent>
            <Input placeholder="Jane Doe" />
            <FieldDescription>Your display name</FieldDescription>
          </FieldContent>
        </Field>

        <Field>
          <FieldLabel>Email</FieldLabel>
          <FieldContent>
            <Input type="email" placeholder="jane@example.com" />
          </FieldContent>
        </Field>

        <Field>
          <FieldLabel>Bio</FieldLabel>
          <FieldContent>
            <Textarea placeholder="Short bio" />
          </FieldContent>
        </Field>
      </FieldGroup>
      <FieldSeparator>Details</FieldSeparator>
      <FieldGroup>
        <Field orientation="horizontal">
          <FieldTitle>Public profile</FieldTitle>
          <FieldDescription>Controls visibility of your data.</FieldDescription>
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
};
import type { Meta, StoryObj } from "@storybook/react"
import { Banner, BannerTitle, BannerDescription, BannerActions, BannerIcon } from "./banner"
import { Button } from "./button"
import { BadgeCentIcon, PencilIcon } from "lucide-react"

const meta = {
  title: "UI/Banner",
  component: Banner,
  subcomponents: { BannerTitle, BannerDescription, BannerActions },
  tags: ["autodocs"],
  parameters: {
    controls: { exclude: ["className", "style", "ref", "asChild"] },
  },
} satisfies Meta<typeof Banner>

export default meta

type Story = StoryObj<typeof Banner>

export const Default: Story = {
  render: () => (
    <Banner>
       <BannerIcon><BadgeCentIcon size={18}/></BannerIcon>
      
      <div className="gap-2">
        <BannerTitle>Helpful banner title</BannerTitle>
        <BannerDescription>
          This is a short description for the banner. Use it to inform users
          about something important.
        </BannerDescription>
      </div>
    </Banner>
  ),
}
export const Info: Story = {
  render: () => (
    <Banner variant= "info">
        <BannerIcon className="bg-white border-blue-300 text-color-blue-600 "><PencilIcon size={18}/></BannerIcon>
        
      <div>
        <BannerTitle>Helpful banner title</BannerTitle>
        <BannerDescription>
          This is a short description for the banner. Use it to inform users
          about something important.
        </BannerDescription>
      </div>
      
    </Banner>
  ),
}
export const WithActions: Story = {
  render: () => (
    <Banner>
     <BannerIcon><PencilIcon size={18}/></BannerIcon>

      <div>
        <BannerTitle>Banner with actions</BannerTitle>
        <BannerDescription>
          Include actions on the right to allow quick responses.
        </BannerDescription>
      </div>
      <BannerActions>
        <Button variant="ghost" size="sm">Dismiss</Button>
        <Button size="sm">Take Action</Button>
      </BannerActions>
    </Banner>
  ),
}

export const Destructive: Story = {
  render: () => (
    <Banner variant="destructive">
        <div className="flex flex-col gap-8">
            <div className="flex gap-4">
                <BannerIcon><PencilIcon size={18}/></BannerIcon>
      <div>
        <BannerTitle>Destructive banner</BannerTitle>
        <BannerDescription>
          This banner highlights a destructive or urgent state.
        </BannerDescription>
      </div></div>
     
      <BannerActions>
        <Button variant="ghost" size="sm">Cancel</Button>
        <Button variant="destructive" size="sm">Delete</Button>
      </BannerActions>
        </div>
        
    </Banner>
  ),
}

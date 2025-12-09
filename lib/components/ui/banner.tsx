import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const bannerVariants = cva(
	"relative w-full rounded-lg border px-4 py-3 text-sm grid items-center gap-3 grid-cols-[auto_1fr_auto] [&>svg]:size-4 [&>svg]:translate-y-0.5",
	{
		variants: {
			variant: {
				default: "bg-card text-card-foreground",
				destructive:
					"text-destructive bg-card [&:has([data-slot=banner-description])]:*::text-destructive/90",
				info: "bg-blue-50 text-blue-900",
				success: "bg-green-50 text-green-900",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	}
)

function Banner({ className, variant, ...props }: React.ComponentProps<"div"> &
	VariantProps<typeof bannerVariants>) {
	return (
		<div
			data-slot="banner"
			role="status"
			className={cn(bannerVariants({ variant }), className)}
			{...props}
		/>
	)
}

function BannerTitle({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="banner-title"
			className={cn("col-start-2 font-medium tracking-tight line-clamp-1", className)}
			{...props}
		/>
	)
}

function BannerIcon({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="banner-icon"
			className={cn("p-2 border rounded-sm text-black", className)}
			{...props}
		/>
	)
}

function BannerDescription({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="banner-description"
			className={cn(
				"col-start-2 text-muted-foreground text-sm [&_p]:leading-relaxed",
				className
			)}
			{...props}
		/>
	)
}

function BannerActions({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="banner-actions"
			className={cn("col-start-3 flex items-center gap-2", className)}
			{...props}
		/>
	)
}

export { Banner, BannerTitle, BannerDescription, BannerActions, BannerIcon }

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { colors } from "@/lib/utils/color";

const badgeVariants = cva(
    "inline-flex gap-1.5 py-1 px-2 items-center bg-muted rounded-lg border",
    {
        variants: {
            size: {
                sm: "text-xs",
                md: "text-sm",
                lg: "text-base",
            },
        },
        defaultVariants: {
            size: "md",
        },
    }
);

export interface BadgeProps extends VariantProps<typeof badgeVariants> {
    children: React.ReactNode;
    className?: string;
    color?: string;
    showDot?: boolean;
}

export function Badge({ children, className, color = colors.green, size, showDot = true }: BadgeProps) {
    return (
        <span
            className={cn(badgeVariants({ size }), className)}
            style={{ color }}
            >
            {showDot && (
                <span
                    className="block w-2 h-2 rounded-full"
                    style={{
                        backgroundColor: color,
                    }}
                />
            )}
            {children}
        </span>
    );
}
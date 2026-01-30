import { cn } from "@/lib/utils";

export interface BadgeProps {
    children: React.ReactNode;
    className?: string;
    color?: string;
}

export function Badge({ children, className, color = "#27A847" }: BadgeProps) {
    return (
        <span
            className={cn("inline-flex gap-1.5 py-1 px-2 text-xs items-center bg-muted rounded-lg border", className)}
            style={{ color }}
            >
            <span
                className="block w-2 h-2 rounded-full"
                style={{
                    backgroundColor: color,
                }}
            />
            {children}
        </span>
    );
}
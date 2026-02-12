import { cn } from "@/lib/utils";
import { Badge, type BadgeProps } from "./badge";

export function RoleBadge(props: BadgeProps) {
    const { children, className, ...rest } = props;

    return (
        <Badge showDot={false} className={cn("py-0.5 px-1 text-sm leading-none border-0 rounded", className)} {...rest}>
            {children}
        </Badge>
    );
}
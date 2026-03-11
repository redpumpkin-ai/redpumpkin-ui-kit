import { cn } from "@/lib/utils";
import { colorWithOpacity } from "@/lib/main";
import { Badge, type BadgeProps } from "./badge";

export function RoleBadge(props: BadgeProps) {
    const { children, className, ...rest } = props;

    return (
        <Badge
            showDot={false}
            className={cn("py-0.5 px-1 text-sm leading-none border-0 rounded", className)}
            style={{
                backgroundColor: colorWithOpacity(rest.color || "#000000", 0.1),
            }}
            {...rest}
            >
            {children}
        </Badge>
    );
}
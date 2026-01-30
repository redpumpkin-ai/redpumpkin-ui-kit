import { cn } from "@/lib/utils";

interface BlockTitleProps {
    title: string | React.ReactNode;
    description?: string | React.ReactNode;
    className?: string;
}

export function BlockTitle({ title, description, className }: BlockTitleProps) {
    return (
        <header className={cn("mb-6", className)}>
            <h2 className="text-title font-medium leading-snug">
                {title}
            </h2>
            {
                description && (
                    <p className="text-sm text-muted-foreground">
                        {description}
                    </p>
                )
            }
        </header>
    );
}
import { cn } from "@/lib/utils";

export interface EmptyStateProps {
    description?: string;
    imageUrl?: string;
    className?: string;
    imageClassName?: string;
    descClassName?: string;
}

export function EmptyState({
    description = "No data available",
    imageUrl = "/images/icon-empty-data.svg",
    className,
    imageClassName,
    descClassName,
}: EmptyStateProps) {
    return (
        <div className={cn("grid text-center", className)}>
            <div className={cn("mx-auto max-w-[200px]", imageClassName)}>
                <img
                    src={imageUrl}
                    alt={description}
                    className="block w-full h-full object-cover object-center"
                    loading="lazy"
                />
            </div>
            <p className={cn("leading-snug", descClassName)}>
                {description}
            </p>
        </div>
    );
}
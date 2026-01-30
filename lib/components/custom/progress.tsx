import { cn } from "@/lib/utils";

interface ProgressProps {
    value: number;
    className?: string;
    bgColor?: string;
    activeColor?: string;
}

export function Progress({
        value,
        className,
        bgColor = "#d1d1d1",
        activeColor = "#171717",
    }: ProgressProps) {
    return (
        <div className={cn("relative h-2 rounded-full", className)} style={{ backgroundColor: bgColor }}>
            <span
                className="block absolute top-0 left-0 bottom-0 z-[1] rounded-full"
                style={{
                    width: `${value}%`,
                    backgroundColor: activeColor,
                }}
            />
        </div>
    );
}
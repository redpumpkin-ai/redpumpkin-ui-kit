import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/lib/components/ui/select";

interface PaginationProps {
    className?: string;
    prevLabel?: string;
    prevIcon?: React.JSX.Element;
    prevClassName?: string;
    nextLabel?: string;
    nextIcon?: React.JSX.Element;
    nextClassName?: string;
    currentPage: number;
    totalPage: number;
    separatorClassName?: string;
    displayClassName?: string;

    // methods
    onPrevPage: (currentPage: number) => void;
    onNextPage: (currentPage: number) => void;
    onPageChange: (selectedPage: number) => void;
}

export function Pagination({
    className,
    prevLabel = "Prev",
    prevIcon = <ChevronLeft size={16} />,
    prevClassName = "",
    nextLabel = "Next",
    nextIcon = <ChevronRight size={16} />,
    nextClassName = "",
    currentPage = 1,
    totalPage = 1,
    separatorClassName = "",
    displayClassName = "",
    onPrevPage,
    onNextPage,
    onPageChange,
}: PaginationProps) {
    if (totalPage <= 1) {
        return null;
    }

    return (
        <div className={cn("flex gap-3 text-[13px] text-meta", className)}>
            <button
                type="button"
                className={cn("inline-flex gap-0.5 items-center rounded-md cursor-pointer transition-colors hover:text-foreground", prevClassName)}
                onClick={() => onPrevPage(currentPage)}
                >
                {prevIcon}
                {prevLabel}
            </button>
            <span className={cn("h-full w-px bg-border", separatorClassName)}></span>
            <span className={cn("inline-flex gap-2 items-center", displayClassName)}>
                <span>Page</span>
                <span>
                    <Select value={`${currentPage}`} onValueChange={(val) => onPageChange(parseInt(val))}>
                        <SelectTrigger className="h-8">
                            <SelectValue placeholder={"1"} />
                        </SelectTrigger>
                        <SelectContent>
                            {Array.from({ length: totalPage }).map((_, index) => (
                                <SelectItem key={index} value={`${index + 1}`}>
                                    {index + 1}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </span>
                <span>of</span>
                <span>{totalPage}</span>
            </span>
            <span className={cn("h-full w-px bg-border", separatorClassName)}></span>
            <button
                type="button"
                className={cn("inline-flex gap-0.5 items-center rounded-md cursor-pointer transition-colors hover:text-foreground", nextClassName)}
                onClick={() => onNextPage(currentPage)}
                >
                {nextLabel}
                {nextIcon}
            </button>
        </div>
    );
}
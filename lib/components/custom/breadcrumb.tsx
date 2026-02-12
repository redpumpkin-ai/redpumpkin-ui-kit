import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CustomBreadcrumbItem {
    path: string;
    label: string;
}

export interface CustomBreadcrumbProps {
    items: CustomBreadcrumbItem[];
    separator?: string | React.JSX.Element;
    activeClassName?: string;
    linkClassName?: string;
    separatorClassName?: string;
    customLinkRenderer?: (item: CustomBreadcrumbItem) => React.JSX.Element;
}

export function CustomBreadcrumb({
    items,
    separator = <ChevronRight size={20} strokeWidth={1} />,
    activeClassName,
    linkClassName,
    separatorClassName,
    customLinkRenderer,
}: CustomBreadcrumbProps) {
    if (!items || items.length === 0) {
        return null;
    }

    return (
        <nav className="flex items-center text-sm" aria-label="Breadcrumb">
            {
                items.map((item, index) => (
                    <div key={index} className="flex items-center">
                        {
                            index > 0 && <span className={cn("mx-2 text-gray-400", separatorClassName)}>{separator}</span>
                        }
                        {
                            index === items.length - 1 ? (
                                <span className={cn("text-foreground line-clamp-1 text-ellipsis", activeClassName)}>
                                    {item.label}
                                </span>
                            ) : (
                                customLinkRenderer ? customLinkRenderer(item) : <a href={item.path} className={cn("whitespace-nowrap text-gray-500 hover:text-gray-700", linkClassName)}>
                                    {item.label}
                                </a>
                            )
                        }
                    </div>
                ))
            }
        </nav>
    );
}
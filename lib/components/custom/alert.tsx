import { useState } from "react";
import { cva } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

interface AlertProps {
    children: React.ReactNode;
    className?: string;
    variant?: "info" | "success" | "warning" | "danger";
    onClose?: () => void;
}

export const alertVariants = cva(
    "relative py-3 pl-4 pr-10 text-sm rounded-lg",
    {
        variants: {
            variant: {
                info: "bg-sky-50 text-sky-800",
                success: "bg-green-50 text-green-800",
                warning: "bg-yellow-50 text-yellow-800",
                danger: "bg-red-50 text-red-800",
            },
        },
        defaultVariants: {
            variant: "info",
        },
    }
);

export function Alert({ children, className, variant, onClose }: AlertProps) {
    const [isShow, setIsShow] = useState<boolean>(true);

    const handleClose = () => {
        setIsShow(false);
        onClose?.();
    };

    return (
        <div className={cn(alertVariants({ variant }), className)} style={{ display: isShow ? "block" : "none" }}>
            {children}
            <button
                type="button"
                onClick={handleClose}
                className="absolute top-1/2 -translate-y-1/2 right-3"
                >
                <X className="w-4 h-4" />
            </button>
        </div>
    );
}
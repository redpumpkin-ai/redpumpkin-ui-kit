import {
    useState,
    useEffect,
    useCallback,
    createContext,
    useContext,
} from "react";

import { createPortal } from "react-dom";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";
    
interface CustomDrawerContextProps {
    isOpen: boolean;
    closeDrawer: () => void;
}

interface CustomDrawerProviderProps {
    isOpen: boolean;
    children: React.ReactNode;
    closeDrawer: () => void;
}

interface CustomDrawerProps {
    children: React.ReactNode;
    className?: string;
    contentClassName?: string;
    overlayClassName?: string;
}

export const CustomDrawerContext = createContext<CustomDrawerContextProps | null>(null);

export const useCustomDrawer = () => {
    const context = useContext(CustomDrawerContext);
    if (!context) {
        throw new Error("useDrawer must be used within an DrawerProvider");
    }
    return context;
};

export function CustomDrawerProvider({ isOpen, closeDrawer, children }: CustomDrawerProviderProps) {
    const value = {
        isOpen,
        closeDrawer,
    };

    return (
        <CustomDrawerContext.Provider value={value}>
            {children}
        </CustomDrawerContext.Provider>
    );
}

export function CustomDrawer({
    children,
    className,
    contentClassName,
    overlayClassName,
}: CustomDrawerProps) {
    const { isOpen, closeDrawer } = useCustomDrawer();
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const modalRoot = document.getElementById("root");

    useEffect(() => {
        setIsMounted(true);

        return () => {
            setIsMounted(false);
        };
    }, []);

    const handleClose = useCallback(() => {
        closeDrawer();
    }, [closeDrawer]);

    const handleOverlayClick = useCallback((event: React.MouseEvent) => {
        if (event.target === event.currentTarget) {
            handleClose();
        }
    }, [handleClose]);

    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === "Escape" && isOpen) {
            handleClose();
        }
    }, [isOpen, handleClose]);

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleKeyDown]);

    if (!isOpen || !isMounted || !modalRoot) {
        return null;
    }

    return createPortal(
        <div className={cn(
                "drawer hidden fixed z-50 inset-0 w-full h-full justify-end",
                className,
                isOpen && "flex",
            )}
            >
            <div className={cn(
                    "fixed inset-0 bg-white/60 transition-opacity transition-opacity duration-300 ease-in-out",
                    overlayClassName,
                    isOpen ? "opacity-100" : "opacity-0",
                )}
                onClick={handleOverlayClick}
                >
            </div>
            <div className={cn("drawer-content flex flex-col relative z-10 w-[240px] h-full bg-background", contentClassName)}>
                {children}
            </div>
        </div>,
        modalRoot
    );
}

export function CustomDrawerHeader({
    title,
    desc,
}: {
    title: string;
    desc?: string | React.ReactNode;
}) {
    const { closeDrawer } = useCustomDrawer();

    return (
        <div className="relative">
            <header className="p-4 border-b">
                <h3 className="font-medium md:text-lg leading-tight">
                    {title}
                </h3>
                {
                    desc && (
                        <p className="text-sm text-muted-foreground leading-snug">
                            {desc}
                        </p>
                    )
                }
            </header>
            <button
                type="button"
                className="inline-flex absolute top-3 right-3 z-[1] w-8 h-8 items-center justify-center rounded-lg transition-colors hover:bg-muted"
                onClick={closeDrawer}
                >
                <X size={18} />
            </button>
        </div>
    );
}

export function CustomDrawerContent({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={cn("flex-grow p-4", className)}>
            {children}
        </div>
    );
}
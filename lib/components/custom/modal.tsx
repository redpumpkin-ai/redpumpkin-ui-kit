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

interface ModalContextProps {
    isOpen: boolean;
    onClose: () => void;
}

interface ModalProviderProps {
    isOpen: boolean;
    children: React.ReactNode;
    onClose: () => void;
}

interface ModalProps {
    children: React.ReactNode;
    className?: string;
    overlayClassName?: string;
}

export const ModalContext = createContext<ModalContextProps | null>(null);

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within an ModalProvider");
    }
    return context;
};

export function ModalProvider({ isOpen, onClose, children }: ModalProviderProps) {
    const value = {
        isOpen,
        onClose,
    };

    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    );
}

export function Modal({
    children,
    className,
    overlayClassName,
}: ModalProps) {
    const { isOpen, onClose } = useModal();
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const modalRoot = document.getElementById("root");

    useEffect(() => {
        setIsMounted(true);

        return () => {
            setIsMounted(false);
        };
    }, []);

    const handleClose = useCallback(() => {
        onClose();
    }, [onClose]);

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
                "modal hidden fixed z-50 top-0 left-0 p-4 w-full h-full overflow-hidden items-center justify-center transition-opacity duration-300 ease-in-out",
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
            {children}
        </div>,
        modalRoot
    );
}

export function ModalContent({
    children,
    className,
    contentClassName,
}: {
    children: React.ReactNode;
    className?: string;
    contentClassName?: string;
}) {
    const { isOpen } = useModal();

    return (
        <div className={cn(
                "modal-card relative bg-white rounded-lg shadow transition-all duration-300 ease-out",
                className,
                isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95",
            )}
            >
            <div className={cn("max-h-screen overflow-y-auto", contentClassName)} style={{ maxHeight: `calc(100vh - 64px)`}}>
                {children}
            </div>
        </div>
    );
}

export function ModalHeader({
    title,
    desc,
}: {
    title: string;
    desc?: string | React.ReactNode;
}) {
    const { onClose } = useModal();

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
                onClick={onClose}
                >
                <X size={18} />
            </button>
        </div>
    );
}

export function ModalContentBody({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={cn("p-4", className)}>
            {children}
        </div>
    );
}
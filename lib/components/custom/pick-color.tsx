import { colorWithOpacity, colors } from "@/lib/utils/color";

interface PickColorProps {
    currentColor: string;
    onColorChange: (color: string) => void;
}

export function PickColor({ currentColor, onColorChange }: PickColorProps) {
    return (
        <div className="flex flex-wrap gap-2">
            {
                Object.values(colors).map((color) => (
                    <div
                        key={color}
                        className="w-10 h-10 rounded-md transition-colors cursor-pointer"
                        style={{ backgroundColor: color === currentColor ? color : colorWithOpacity(color, 0.2) }}
                        onClick={() => onColorChange(color)}
                    />
                ))
            }
        </div>
    );
}
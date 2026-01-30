import { Progress } from "./progress";

interface TokenUsageProps {
    inputTokens: {
        value: number;
        label: string;
        color: string;
    };
    outputTokens: {
        value: number;
        label: string;
        color: string;
    };
    totalTokens: {
        value: number;
        label: string;
        color: string;
    };
    bgColor?: string;
}

export function TokenUsage({ inputTokens, outputTokens, totalTokens, bgColor = "#F7F9F9" }: TokenUsageProps) {
    return (
        <div>
            <ul className="grid gap-2">
                <li>
                    <Progress
                        value={inputTokens.value / totalTokens.value * 100}
                        bgColor={bgColor}
                        activeColor={inputTokens.color}
                    />
                </li>
                <li>
                    <Progress
                        value={outputTokens.value / totalTokens.value * 100}
                        bgColor={bgColor}
                        activeColor={outputTokens.color}
                    />
                </li>
                <li>
                    <Progress
                        value={totalTokens.value / totalTokens.value * 100}
                        bgColor={bgColor}
                        activeColor={totalTokens.color}
                    />
                </li>
            </ul>
            <ul className="grid gap-1 mt-4 text-xs whitespace-nowrap">
                <li className="flex gap-1 items-center">
                    <span className="block w-2 h-2 rounded-full" style={{ backgroundColor: inputTokens.color }}></span>
                    <span className="font-medium">{inputTokens.label}</span>
                    <span className="text-muted-foreground">Prompt tokens</span>
                </li>
                <li className="flex gap-1 items-center">
                    <span className="block w-2 h-2 rounded-full" style={{ backgroundColor: outputTokens.color }}></span>
                    <span className="font-medium">{outputTokens.label}</span>
                    <span className="text-muted-foreground">Completion tokens</span>
                </li>
                <li className="flex gap-1 items-center">
                    <span className="block w-2 h-2 rounded-full" style={{ backgroundColor: totalTokens.color }}></span>
                    <span className="font-medium">{totalTokens.label}</span>
                    <span className="text-muted-foreground">Usage tokens</span>
                </li>
            </ul>
        </div>
    );
}
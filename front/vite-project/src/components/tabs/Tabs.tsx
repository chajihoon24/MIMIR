import { useState } from "react";
import type { TabItem } from "./tabs.types";

interface TabsProps<T extends string> {
    tabs: readonly TabItem<T>[];
    value?: T;
    defaultValue?: T;
    onChange?: (key: T) => void;
}

export function Tabs<T extends string>({
    tabs,
    value,
    defaultValue,
    onChange,
}: TabsProps<T>) {
    const [innerValue, setInnerValue] = useState<T | undefined>(
        defaultValue ?? tabs[0]?.key,
    );

    const active = value ?? innerValue;

    const handleChange = (key: T) => {
        setInnerValue(key);
        onChange?.(key);
    };

    return (
        <div>
            {/* 탭 버튼 */}
            <div className="flex border-b border-gray-300 gap-2">
                {tabs.map((tab) => {
                    const isActive = tab.key === active;

                    return (
                        <button
                            key={tab.key}
                            disabled={tab.disabled}
                            onClick={() => handleChange(tab.key)}
                            className={`
                px-4 py-2 border-b-2 transition
                ${
                    isActive
                        ? "font-bold border-blue-500 text-blue-600 bg-blue-50 rounded-t-md"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                }
                ${tab.disabled ? "opacity-40 cursor-not-allowed" : ""}
              `}
                        >
                            {tab.label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export function Checkbox({ label, checked, onChange }: CheckboxProps) {
    return (
        <label
            className="flex items-center gap-2 cursor-pointer select-none  "
            onClick={() => onChange(!checked)}
        >
            {/* 체크박스 UI */}
            <span
                className={`
          flex h-4 w-4 items-center justify-center
          rounded-sm border
          transition
          ${checked ? "bg-black border-black" : "bg-white border-gray-400"}
        `}
            >
                {checked && (
                    <svg
                        className="h-3 w-3 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                )}
            </span>

            {/* 라벨 텍스트 */}
            <span className="text-sm text-gray-800">{label}</span>
        </label>
    );
}

/*
    [Select]
    조회용 인풋 컴포넌트입니다.
    사용자가 입력하는 값을 받습니다.
 */

type InputWidth = "sm" | "md" | "lg" | "xl" | "full";

const widthClassMap: Record<InputWidth, string> = {
    sm: "w-32",
    md: "w-48",
    lg: "w-64",
    xl: "w-80",
    full: "w-full",
} as const;

interface SearchInputProps {
    type?: "text" | "number" | "email";
    label: string;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    width?: InputWidth; // px 기준
}

export function SearchInput({
    type = "text",
    label,
    placeholder,
    value,
    onChange,
    width = "md",
}: SearchInputProps) {
    return (
        <div className="flex items-center gap-2">
            <label className="text-sm font-semibold text-gray-600 w-16">
                {label}
            </label>

            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={`
                    ${widthClassMap[width]}
                    px-3 py-1.5
                    border border-gray-300 rounded-xs
                    text-sm
                    focus:outline-none focus:ring-1 focus:ring-blue-400
                `}
            />
        </div>
    );
}
//===========================================================================
/*
    [Select]
    조회용 셀렉트 컴포넌트입니다.
    단순 api로 데이터 기반으로 목록을 가지는 셀렉트 컴포넌트입니다
    동적 연동 셀렉트와 Combo를 구분해서 써야합니다.  
 */

type DefaultOptionType = "all" | "select";

interface SelectOption {
    label: string;
    value: string;
}

const defaultOptionMap: Record<DefaultOptionType, SelectOption> = {
    all: { label: "- 전체 -", value: "" },
    select: { label: "- 선택 -", value: "" },
};

interface SearchSelectProps {
    label: string;
    value: string;
    options: SelectOption[];
    onChange: (value: string) => void;
    width?: InputWidth;
    defaultOption?: DefaultOptionType;
}

export function SearchSelect({
    label,
    value = "",
    options,
    onChange,
    width = "md",
    defaultOption = "all",
}: SearchSelectProps) {
    const mergedOptions: SelectOption[] = [
        defaultOptionMap[defaultOption],
        ...options,
    ];
    return (
        <div className="flex items-center gap-2">
            <label className="text-sm font-semibold text-gray-600 w-16">
                {label}
            </label>

            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={`
                    ${widthClassMap[width]}
                    px-2 py-1.5
                    border border-gray-300 rounded
                    text-sm bg-white
                `}
            >
                {mergedOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
//===========================================================================
// [form input]

interface FormInputProps {
    type?: "text" | "number" | "email";
    label: string;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    width?: InputWidth; // px 기준
    required?: boolean;
}

export function FormInput({
    type,
    label,
    placeholder = "",
    value,
    onChange,
    width,
    required,
}: FormInputProps) {
    return (
        <div className="flex items-center gap-2">
            <label className="relative my-auto font-semibold text-gray-700 w-40">
                {label}{" "}
                {required && (
                    <span className="absolute  ml-1 -top-1 text-red-500">*</span> // 🔴 필수 표시
                )}
            </label>

            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={`
                    ${widthClassMap[width]}
                    px-3 py-1.5
                    border border-gray-300 rounded-sm
                    text-sm
                    focus:outline-none focus:ring- focus:ring-gray-500
                `}
            />
        </div>
    );
}

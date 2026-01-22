// copy OuterHTML

// [setting]
const DEFAULT_COLOR = "#434343";
const DEFAULT_SIZE = 24;
const DEFAULT_WEIGHT = 1;

interface IconProps {
    size?: number;
    className?: string;
    fill?: string;
    stroke?: string;
    weight?: number;
}

//=============================================================
// [아이콘 컴포넌트]

export function IconBookmark({
    size = DEFAULT_SIZE,
    className,
    fill = "none",
    weight = DEFAULT_WEIGHT,
    stroke = DEFAULT_COLOR,
}: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={fill}
            stroke={stroke}
            stroke-width={weight}
            stroke-linecap="round"
            stroke-linejoin="round"
            className={`lucide lucide-bookmark-icon lucide-bookmark ${className}`}
        >
            <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
        </svg>
    );
}

export function IconInfo({
    size = DEFAULT_SIZE,
    className,
    fill = "none",
    stroke = DEFAULT_COLOR,
    weight = DEFAULT_WEIGHT,
}: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={fill}
            stroke="#434343"
            stroke-width={weight}
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-circle-alert-icon lucide-circle-alert"
        >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" x2="12" y1="8" y2="12" />
            <line x1="12" x2="12.01" y1="16" y2="16" />
        </svg>
    );
}

export function IconTrash({
    size = DEFAULT_SIZE,
    className,
    fill = DEFAULT_COLOR,
    weight = DEFAULT_WEIGHT,
}: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={size}
            viewBox="0 -960 960 960"
            width={size}
            fill={fill}
        >
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
        </svg>
    );
}

export function IconSetting({
    size = DEFAULT_SIZE,
    className,
    fill = "none",
    weight = DEFAULT_WEIGHT,
    stroke = DEFAULT_COLOR,
}: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={fill}
            stroke="#434343"
            stroke-width={weight}
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-settings-icon lucide-settings"
        >
            <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );
}

export function IconRefresh({
    size = DEFAULT_SIZE,
    className,
    fill = "none",
    weight = DEFAULT_WEIGHT,
}: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={fill}
            stroke="#434343"
            stroke-width={weight}
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-rotate-ccw-icon lucide-rotate-ccw"
        >
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
        </svg>
    );
}

export function IconSearch({
    size = DEFAULT_SIZE,
    className,
    stroke,
    weight = DEFAULT_WEIGHT,
}: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m21 21-4.34-4.34" />
            <circle cx="11" cy="11" r="8" />
        </svg>
    );
}

export function IconPanel({
    size = DEFAULT_SIZE,
    className,
    fill = "none",
    weight = DEFAULT_WEIGHT,
}: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={fill}
            stroke="#1f2937"
            stroke-width={weight}
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-panel-right-icon lucide-panel-right"
        >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M15 3v18" />
        </svg>
    );
}

export function IconEllipsis({
    size = DEFAULT_SIZE,
    className,
    fill = "none",
    weight = DEFAULT_WEIGHT,
}: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-ellipsis-icon lucide-ellipsis"
        >
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
        </svg>
    );
}

export function IconCalendar({
    size = DEFAULT_SIZE,
    className="",
    fill = "none",
    weight = DEFAULT_WEIGHT,
}: IconProps){
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={fill}
            stroke="currentColor"
            stroke-width={weight}
            stroke-linecap="round"
            stroke-linejoin="round"
            className={`lucide lucide-calendar-days-icon lucide-calendar-days relative ${className}`}
        >
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
            <path d="M8 14h.01" />
            <path d="M12 14h.01" />
            <path d="M16 14h.01" />
            <path d="M8 18h.01" />
            <path d="M12 18h.01" />
            <path d="M16 18h.01" />
        </svg>
    );
}
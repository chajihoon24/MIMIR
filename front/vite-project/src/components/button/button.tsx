import { Link, type LinkProps } from "react-router-dom";
import { cn } from "../../config/tailwind-merge";
import { BUTTON_COLOR, BUTTON_SIZE } from "./button.types";
import type { ButtonColor, ButtonSize } from "./button.types";

interface LinkBtnProps extends LinkProps {
    text: string;
    size?: ButtonSize;
    color?: ButtonColor;
    disabled?: boolean;
}

export function LinkBtn({
    text = "init",
    size = "md",
    className,
    disabled = false,
    to = "/",
    color = "basic",
    ...props
}: LinkBtnProps) {
    return (
        <Link
            aria-disabled={disabled}
            to={disabled ? undefined : to}
            className={cn(
                `
        inline-flex items-center justify-center
        font-semibold
        border-gray-300
        rounded-md
        bg-white text-gray-800
        hover:text-white
        transition
        box-border border
        `,
                BUTTON_SIZE[size],
                BUTTON_COLOR[color],
                className,
                disabled &&
                    `
      pointer-events-none
      opacity-30
      cursor-not-allowed
    `,
            )}
            {...props}
        >
            {text}
        </Link>
    );
}

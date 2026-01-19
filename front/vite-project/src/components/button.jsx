import { Link } from "react-router-dom";



// Login page 용 버튼 컴포넌트
export function LoginBtn({ text, className = "", to = "/", ...props }) {
    return (
        <Link
            to={to}
            className={`
                        w-full h-11 rounded-md bg-[#1a1a1a]
                      !text-white font-semibold
                        transition-colors
                        flex items-center justify-center
                        ${className}
      `}
            {...props}
        >
            {text}
        </Link>
    );
}

export function LinkBtn({ text, className = "", to = "/", ...props }) {
    return (
        <Link
            to={to}
            className="
    px-4 py-2
    text-sm font-semibold
    border border-gray-300
    rounded-md
    bg-white text-gray-800
    hover:bg-gray-800

    transition

  "
            {...props}
        >
            {text}
        </Link>
    );
}

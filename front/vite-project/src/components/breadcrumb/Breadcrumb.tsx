import { Link } from "react-router-dom";
import { BreadCrumbItem } from "./breadcrumb.types";

interface BreadCrumbProps {
    items?: BreadCrumbItem[];
    className?: string;
}

export function BreadCrumb({ className = "", items = [] }: BreadCrumbProps) {
    return (
        <nav
            aria-label="Breadcrumb"
            className={`flex items-center text-gray-600 ${className}`}
        >
            {/* 홈 아이콘 */}
            <Link
                to="/"
                className="flex items-center hover:text-gray-900"
                aria-label="Home"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 -960 960 960"
                    fill="currentColor"
                >
                    <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Z" />
                </svg>
            </Link>

            {/* 구분자 + 아이템 */}
            {items.map((item, index) => {
                const isLast = index === items?.length - 1;

                return (
                    <div key={index} className="flex items-center ">
                        <span className="mx-2 text-gray-400">{">"}</span>

                        {item.href && !isLast ? (
                            <Link
                                to={item.href}
                                className="hover:text-gray-900 hover:underline text-[14px]"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span
                                className="text-[14px] text-gray-600"
                                aria-current="page"
                            >
                                {item.label}
                            </span>
                        )}
                    </div>
                );
            })}
        </nav>
    );
}

import { ReactNode } from "react";

interface SearchFormProps {
    children: ReactNode;
}

export function SearchForm({ children }: SearchFormProps) {
    return (
        <div className="px-8 py-4 bg-gray-50 border-b border-gray-200 border-t border-gray-300">
            <div className="flex items-center gap-6">{children}</div>
        </div>
    );
}

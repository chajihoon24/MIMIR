import { ReactNode } from "react";

interface SearchFormProps {
    children: ReactNode;
}
export function BtnWrapper({ children }: SearchFormProps) {
    return <div className="flex items-center gap-2 ml-auto">{children}</div>;
}

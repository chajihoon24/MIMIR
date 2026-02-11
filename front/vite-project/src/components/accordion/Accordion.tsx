import { useState, createContext, useContext } from "react";

const AccordionContext = createContext(null);

export function Accordion({
    children,
    defaultOpen = null,
    allowMultiple = false,
}) {
    const [openItems, setOpenItems] = useState(() => {
        if (defaultOpen == null) return allowMultiple ? [] : null;
        return allowMultiple ? [defaultOpen] : defaultOpen;
    });

    const toggle = (id) => {
        setOpenItems((prev) => {
            if (allowMultiple) {
                return prev.includes(id)
                    ? prev.filter((v) => v !== id)
                    : [...prev, id];
            }
            return prev === id ? null : id;
        });
    };

    return (
        <AccordionContext.Provider value={{ openItems, toggle, allowMultiple }}>
            <div className="w-full border border-gray-400">
                {children}
            </div>
        </AccordionContext.Provider>
    );
}

export function AccordionItem({ id, children }) {
    return (
        <div className={`border-b border-gray-400 last:border-b-0`}>
            {children}
        </div>
    );
}

export function AccordionHeader({ id, children }) {
    const ctx = useContext(AccordionContext);
    const isOpen = ctx.allowMultiple
        ? ctx.openItems.includes(id)
        : ctx.openItems === id;

    return (
        <button
            onClick={() => ctx.toggle(id)}
            className={`w-full flex justify-between items-center p-3 text-left font-medium  ${isOpen ? "border-b border-gray-300" : ""}`}
        >
            {children}
            <span className="ml-2 text-sm">{isOpen ? "▲" : "▼"}</span>
        </button>
    );
}

export function AccordionPanel({ id, children }) {
    const ctx = useContext(AccordionContext);
    const isOpen = ctx.allowMultiple
        ? ctx.openItems.includes(id)
        : ctx.openItems === id;

    return (
        <div
            className={`overflow-hidden transition-all duration-300 info-txt bg-gray-100 ${
                isOpen ? "max-h-screen p-4" : "max-h-0 p-0"
            }`}
        >
            {isOpen && children}
        </div>
    );
}

/*
사용 예시

<Accordion defaultOpen="item1">
  <AccordionItem id="item1">
    <AccordionHeader id="item1">첫 번째</AccordionHeader>
    <AccordionPanel id="item1">내용 1</AccordionPanel>
  </AccordionItem>
  <AccordionItem id="item2">
    <AccordionHeader id="item2">두 번째</AccordionHeader>
    <AccordionPanel id="item2">내용 2</AccordionPanel>
  </AccordionItem>
</Accordion>
*/

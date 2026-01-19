export const BUTTON_SIZE = {
    md: "px-4 py-2 text-sm font-semibold",
    lg: "px-6 py-3  font-semibold",
    xl: "px-8 py-4 text-lg font-semibold",
} as const;

export const BUTTON_COLOR = {
    black: `
    bg-[#1a1a1a] text-white
    box-border border border-transparent
    
  `,
    basic: `
  bg-white text-gray-800
    border-gray-300
  hover:bg-gray-100  hover:border-gray-400 
`,
    blue: `
    bg-blue-600 text-white
    hover:bg-blue-800
    box-border border border-transparent
  `,
    red: `
    bg-red-600 text-white
    hover:bg-red-800
    box-border border border-transparent
  `,
} as const;

export type ButtonColor = keyof typeof BUTTON_COLOR;
export type ButtonSize = keyof typeof BUTTON_SIZE;

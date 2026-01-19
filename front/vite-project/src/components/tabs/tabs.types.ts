
export type TabKey = string;

export interface TabItem<T extends TabKey =TabKey>{

    key: T;
    label: string;
    disabled?: boolean;

}
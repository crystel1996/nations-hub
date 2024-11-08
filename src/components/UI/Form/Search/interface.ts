export interface SearchFormInterface {
    onSubmit: (search: string) => void;
    defaultValue?: string | null;
}

export interface SearchFormDataInterface {
    search: string;
}
export interface SortingInterface {
    field: string;
    onSortData: (key: string, order: 'asc' | 'desc') => void;
}
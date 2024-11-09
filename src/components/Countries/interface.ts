import { SortingInterface } from "@nations-hub/components/UI/Sorting/interface";

export interface CountriesComponentInterface {
    loading: boolean;
    countries: {
        name: string;
        flag: string;
        alpha3Code: string;
        capital: string;
    }[];
    onLoadMore: () => void;
    isAllDisplay: boolean;
    onSorting: SortingInterface['onSortData'];
}
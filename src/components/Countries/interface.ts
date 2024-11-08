export interface CountriesComponentInterface {
    loading: boolean;
    countries: {
        name: string;
        flag: string;
        alpha3Code: string;
        capital: string;
    }[];
    onLoadMore: () => void;
}
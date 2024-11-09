import { FetchAllCountriesDataInterface } from "@nations-hub/store/action/country/interface";

export interface CountriesReducerStateInterface {
    status: 'idle' | 'loading' | 'success' | 'rejected';
    error: string | null;
    countries: FetchAllCountriesDataInterface[],
    countriesPerPage: number;
    totalCountries: number;
    page: number;
}

export interface CountryReducerStateInterface {
    status: 'idle' | 'loading' | 'success' | 'rejected';
    error: string | null;
    country: FetchAllCountriesDataInterface | null;
}
import { FetchAllCountriesDataInterface } from "@nations-hub/store/action/country/interface";

export interface CountryReducerStateInterface {
    status: 'idle' | 'loading' | 'success' | 'rejected';
    error: string | null;
    countries: FetchAllCountriesDataInterface[],
    countriesPerPage: number;
    totalCountries: number;
    page: number;
}
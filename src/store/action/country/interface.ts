export interface FetchAllCountriesDataInterface {
    name: {
        official: string;
    };
    capital: string[];
    flags: {
        png: string;
    };
}

export type FetchAllCountriesInterface = {
    response: { countries: FetchAllCountriesDataInterface[]; totalCountries: number },
    argument: {  page: number, name?: string},
    failure: {  rejectValue: string}
}
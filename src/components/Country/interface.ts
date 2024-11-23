export interface CountryComponentInterface {
    loading: boolean;
    flag: {
        link: string;
        alt: string;
    };
    name: string;
    continents: string;
    population: number;
    area:string;
    region: string;
    subregion: string;
    currency: string;
    resident: string;
    language: string;
    capital?: string;
}
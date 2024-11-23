import { HeaderComponentInterface } from "@nations-hub/components/UI/Header/interface";
import MENU from "@nations-hub/pages/Countries/Constant/menu";
import { fetchCountries } from "@nations-hub/store/action/country/fetchCountries.action";
import { nextCountryPage } from "@nations-hub/store/reducer/country/countries.reducer";
import { CountriesReducerStateInterface } from "@nations-hub/store/reducer/country/interface";
import { AppDispatch, RootState } from "@nations-hub/store/store";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import CountriesComponent from "@nations-hub/components/Countries/Countries";
import { CountriesComponentInterface } from "@nations-hub/components/Countries/interface";
import MainLayout from "@nations-hub/components/Layout/MainLayout/MainLayout";
import { Box, Container } from "@mui/material";
import { CountryStyle } from "@nations-hub/pages/Countries/CountryStyle";
import { FetchAllCountriesDataInterface } from "@nations-hub/store/action/country/interface";
import { SortingInterface } from "@nations-hub/components/UI/Sorting/interface";

const Countries = () => {

    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const countryName = queryParams.get('name');

    const [listCountries, setListCountries] = useState<CountriesComponentInterface['countries']>([]);
    const [sorting, setSorting] = useState<{direction: 'asc' | 'desc', field: string}>({
        direction: 'asc',
        field: 'name'
    });

    const dispatch = useDispatch<AppDispatch>();
    const getCountries: CountriesReducerStateInterface = useSelector((state: RootState) => state.countries);

    useEffect(() => {
        const handleFetchCountries = () => {
            if (getCountries.status === 'idle') {
                dispatch(fetchCountries({}));
            }
            
        }
        handleFetchCountries();
    }, [getCountries.page, dispatch, getCountries.status]);

    const mappingCountries = (countries: FetchAllCountriesDataInterface[]) => {
        
        const lists = countries
                .slice(0, getCountries.countriesPerPage)
                .map((country) => {
                    return {
                        name: country?.name?.common,
                        flag: country?.flags?.png,
                        alpha3Code: country?.cca2,
                        capital: country?.capital?.[0]
                    }
                });
        return lists 
    };

    const sortingCountries = (key: string, order: 'asc' | 'desc') => {
        if (key === 'name') {
            const sortedLists = [...getCountries.countries].sort((a, b) => {
                const nameA = a?.name?.common?.toLowerCase();
                const nameB = b?.name?.common?.toLowerCase();
          
                if (order === 'asc') {
                  return nameA.localeCompare(nameB);
                } else {
                  return nameB.localeCompare(nameA);
                }
            });
            return sortedLists;
        }
        return getCountries.countries;
    };

    useEffect(() => {
        const handleFilterCountries = () => {
            let countries: FetchAllCountriesDataInterface[] = [];
            const sortedCountries = sortingCountries(sorting.field, sorting.direction);
            if (countryName) {
                sortedCountries.forEach((country) => {
                    if (country?.name?.common?.includes(countryName)) {
                        countries.push(country);
                    }
                });

            } else {
                countries = sortedCountries;
            }
            const lists = mappingCountries(countries);
            setListCountries(lists);
        };
        handleFilterCountries();
    }, [getCountries.countries, countryName, getCountries.countriesPerPage, sorting.direction, sorting.field]);

    const loadMoreCountries = () => {
        dispatch(nextCountryPage());
    };

    const handleSortingCountries: SortingInterface['onSortData'] = (key: string, order: 'asc' | 'desc' ) => {
        if (key === 'name') {
            setSorting({
                direction: order,
                field: key
            });
        }
    };

    const props: HeaderComponentInterface = {
        menus: MENU
    };

    const isAllDisplay = useMemo(() => {
        if (listCountries.length === 0) {
            return true
        }
        return listCountries.length < getCountries.countriesPerPage
    }, [getCountries.countriesPerPage, listCountries.length]);

    return <MainLayout menus={props.menus}>
        <Container>
            <Box sx={CountryStyle.content}>
                <CountriesComponent 
                    loading={getCountries.status === 'loading'} 
                    countries={listCountries} 
                    onLoadMore={loadMoreCountries}
                    onSorting={handleSortingCountries}
                    isAllDisplay={isAllDisplay}
                />
            </Box>
        </Container>
    </MainLayout>
}

export default Countries;
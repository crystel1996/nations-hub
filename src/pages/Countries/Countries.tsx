import Header from "@nations-hub/components/UI/Header/Header";
import { HeaderComponentInterface } from "@nations-hub/components/UI/Header/interface";
import MENU from "@nations-hub/pages/Countries/Constant/menu";
import { fetchCountries } from "@nations-hub/store/action/country/fetchCountries.action";
import { nextCountryPage } from "@nations-hub/store/reducer/country/country.reducer";
import { CountryReducerStateInterface } from "@nations-hub/store/reducer/country/interface";
import { AppDispatch } from "@nations-hub/store/store";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Countries = () => {

    const location = useLocation();
    const isApiFetchCalled = useRef<boolean>(false);

    const queryParams = new URLSearchParams(location.search);
    const countryName = queryParams.get('name');

    const dispatch = useDispatch<AppDispatch>();
    const getCountries: CountryReducerStateInterface = useSelector((state: any) => state.countries);

    useEffect(() => {
        const handleFetchCountries = () => {
            if(getCountries.status === 'idle') {
                isApiFetchCalled.current = true;
                dispatch(fetchCountries({page: getCountries.page, name: countryName ?? ''}));
            }
        }
        !isApiFetchCalled?.current && handleFetchCountries();
    }, [getCountries.page, dispatch, getCountries.status]);

    const loadMoreCountries = () => {
        dispatch(nextCountryPage());
    };

    const props: HeaderComponentInterface = {
        menus: MENU
    };

    return <>
        <Header menus={props.menus} />
        
    </>
}

export default Countries;
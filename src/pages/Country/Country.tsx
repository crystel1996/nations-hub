import { Box } from "@mui/material";
import MainLayout from "@nations-hub/components/Layout/MainLayout/MainLayout";
import { HeaderComponentInterface } from "@nations-hub/components/UI/Header/interface";
import MENU from "@nations-hub/pages/Country/Constant/menu";
import CountryStyle from "@nations-hub/pages/Country/CountryStyle";
import { CountryInterface } from "@nations-hub/pages/Country/interface";
import { FC, useEffect } from "react";
import CountryComponent from "@nations-hub/components/Country/Country";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@nations-hub/store/store";
import { CountryReducerStateInterface } from "@nations-hub/store/reducer/country/interface";
import { fetchCountry } from "@nations-hub/store/action/country/fetchCountry.action";
import { useNavigate, useParams } from "react-router-dom";
import { COUNTRIES_ROUTE } from "@nations-hub/pages/Countries/routes";

const Country: FC<CountryInterface> = () => {

    const navigate = useNavigate();
    const { code } = useParams<{ code: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const getCountry: CountryReducerStateInterface = useSelector((state: RootState) => state.country);

    useEffect(() => {

        const handleFetchCountries = () => {

            if (!code) {
                navigate(COUNTRIES_ROUTE());
                return;
            }

            if (getCountry.status === 'idle' && code) {
                dispatch(fetchCountry({
                    alphaCode: code
                }));
            }
            
        }
        handleFetchCountries();
    }, [dispatch, getCountry.status, code]);

    const props: HeaderComponentInterface = {
        menus: MENU
    };

    return <MainLayout menus={props.menus}>
        <Box sx={CountryStyle.container}>
            <CountryComponent />
        </Box>
    </MainLayout>
}

export default Country;
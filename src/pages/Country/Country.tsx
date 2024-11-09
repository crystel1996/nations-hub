import { Box } from "@mui/material";
import MainLayout from "@nations-hub/components/Layout/MainLayout/MainLayout";
import { HeaderComponentInterface } from "@nations-hub/components/UI/Header/interface";
import MENU from "@nations-hub/pages/Country/Constant/menu";
import CountryStyle from "@nations-hub/pages/Country/CountryStyle";
import { CountryInterface } from "@nations-hub/pages/Country/interface";
import { FC } from "react";
import CountryComponent from "@nations-hub/components/Country/Country";

const Country: FC<CountryInterface> = () => {

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
import { Box } from "@mui/material";
import MainLayout from "@nations-hub/components/Layout/MainLayout/MainLayout";
import { HeaderComponentInterface } from "@nations-hub/components/UI/Header/interface";
import MENU from "@nations-hub/pages/Country/Constant/menu";
import { CountryInterface } from "@nations-hub/pages/Country/interface";
import { FC } from "react";

const Country: FC<CountryInterface> = () => {

    const props: HeaderComponentInterface = {
        menus: MENU
    };

    return <MainLayout menus={props.menus}>
        <Box>
            
        </Box>
    </MainLayout>
}

export default Country;
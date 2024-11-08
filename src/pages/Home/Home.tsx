import { Box } from "@mui/material";
import HomeComponent from "@nations-hub/components/Home/Home";
import MainLayout from "@nations-hub/components/Layout/MainLayout/MainLayout";
import { HeaderComponentInterface } from "@nations-hub/components/UI/Header/interface";
import MENU from "@nations-hub/pages/Home/Constant/menu";
import HomeStyle from "@nations-hub/pages/Home/HomeStyle";

const Home = () => {

    const props: HeaderComponentInterface = {
        menus: MENU
    };

    return <MainLayout menus={props.menus}>
        <Box sx={HomeStyle}>
            <HomeComponent />
        </Box>
    </MainLayout>
}

export default Home;
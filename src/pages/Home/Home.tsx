import { Container } from "@mui/material";
import HomeComponent from "@nations-hub/components/Home/Home";
import Header from "@nations-hub/components/UI/Header/Header";
import { HeaderComponentInterface } from "@nations-hub/components/UI/Header/interface";
import MENU from "@nations-hub/pages/Home/Constant/menu";

const Home = () => {

    const props: HeaderComponentInterface = {
        menus: MENU
    };

    return <>
        <Header menus={props.menus} />
        <Container>
            <HomeComponent />
        </Container>
    </>
}

export default Home;
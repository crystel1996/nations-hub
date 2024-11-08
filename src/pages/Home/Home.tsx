import HomeComponent from "@nations-hub/components/Home/Home";
import { HomeComponentInterface } from "@nations-hub/components/Home/interface";
import MENU from "@nations-hub/pages/Home/Constant/menu";

const Home = () => {

    const props: HomeComponentInterface = {
        header: {
            menus: MENU
        }
    };

    return <>
        <HomeComponent {...props} />
    </>
}

export default Home;
import { HomeComponentInterface } from "@nations-hub/components/Home/interface";
import Header from "@nations-hub/components/UI/Header/Header";
import { FC } from "react";

const Home: FC<HomeComponentInterface> = (props) => {
    return <>
        <Header menus={props.header.menus} />
    </>
}

export default Home;
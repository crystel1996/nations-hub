import { Container } from "@mui/material";
import { MainLayoutInterface } from "@nations-hub/components/Layout/MainLayout/interface";
import MainLayoutStyle from "@nations-hub/components/Layout/MainLayout/MainLayoutStyle";
import Header from "@nations-hub/components/UI/Header/Header";
import { FC } from "react";

const MainLayout: FC<MainLayoutInterface> = (props) => {
    return <>
        <Header menus={props.menus} />
        <Container sx={MainLayoutStyle.container}>
            {props.children}
        </Container>
    </>
}

export default MainLayout;
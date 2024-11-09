import { Box } from "@mui/material";
import { MainLayoutInterface } from "@nations-hub/components/Layout/MainLayout/interface";
import MainLayoutStyle from "@nations-hub/components/Layout/MainLayout/MainLayoutStyle";
import BackToTop from "@nations-hub/components/UI/BackToTop/BackToTop";
import Header from "@nations-hub/components/UI/Header/Header";
import { FC, useRef } from "react";

const MainLayout: FC<MainLayoutInterface> = (props) => {

    const mainLayoutRef = useRef(null);

    return <>
        <Header menus={props.menus} />
        <Box sx={MainLayoutStyle.container} ref={mainLayoutRef}>
            {props.children}
        </Box>
        <BackToTop composantRef={mainLayoutRef} />
    </>
}

export default MainLayout;
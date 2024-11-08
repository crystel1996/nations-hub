import { Box, Typography, useTheme } from "@mui/material";
import { HomeDescriptionStyle } from "@nations-hub/components/Home/HomeStyle";
import { HomeComponentInterface } from "@nations-hub/components/Home/interface";
import SearchLayout from "@nations-hub/components/Layout/SearchLayout/SearchLayout";
import { FC } from "react";

const Home: FC<HomeComponentInterface> = () => {

    const theme = useTheme();

    return <>
        <SearchLayout>
            <Box sx={HomeDescriptionStyle}>
                <Typography variant="body1" className="content">
                    <Typography component="span" color={theme.palette.secondary.main} >Nations Hub</Typography> is a dynamic and user-friendly platform that allows users to easily search for countries and access detailed information about them. 
                    With just a few clicks, users can explore a country's geography, population, history, culture, and more. 
                    Whether you're a traveler, student, or simply a curious mind, <Typography component="span" color={theme.palette.secondary.main} >Nations Hub</Typography> provides a wealth of knowledge at your fingertips, offering an in-depth look at countries around the world.
                </Typography>
            </Box>
        </SearchLayout>
    </>
}

export default Home;
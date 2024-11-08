import { Box, Typography } from "@mui/material";
import { HomeStyle, HomeDescriptionStyle } from "@nations-hub/components/Home/HomeStyle";
import { HomeComponentInterface } from "@nations-hub/components/Home/interface";
import SearchForm from "@nations-hub/components/UI/Form/Search/SearchForm";
import { COUNTRIES_ROUTE } from "@nations-hub/pages/Countries/routes";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const Home: FC<HomeComponentInterface> = () => {

    const navigate = useNavigate();

    const handleSearch = (search: string) => {
        navigate(COUNTRIES_ROUTE(search));
    };

    return <Box sx={HomeStyle}>
        <SearchForm onSubmit={handleSearch} />
        <Box sx={HomeDescriptionStyle}>
            <Typography variant="body1" className="content">
                <Typography component="span">"Nations Hub"</Typography> is a dynamic and user-friendly platform that allows users to easily search for countries and access detailed information about them. 
                With just a few clicks, users can explore a country's geography, population, history, culture, and more. 
                Whether you're a traveler, student, or simply a curious mind, <Typography component="span">Nations Hub</Typography> provides a wealth of knowledge at your fingertips, offering an in-depth look at countries around the world.
            </Typography>
        </Box>
    </Box>
}

export default Home;
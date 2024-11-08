import { Box } from "@mui/material";
import HomeStyle from "@nations-hub/components/Home/HomeStyle";
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
    </Box>
}

export default Home;
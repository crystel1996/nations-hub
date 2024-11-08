import { Box } from "@mui/material";
import HomeStyle from "@nations-hub/components/Home/HomeStyle";
import { HomeComponentInterface } from "@nations-hub/components/Home/interface";
import SearchForm from "@nations-hub/components/UI/Form/Search/SearchForm";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const Home: FC<HomeComponentInterface> = () => {

    const navigate = useNavigate();

    const handleSearch = (search: string) => {
        navigate(`/country`)
    };

    return <Box sx={HomeStyle}>
        <SearchForm onSubmit={handleSearch} />
    </Box>
}

export default Home;
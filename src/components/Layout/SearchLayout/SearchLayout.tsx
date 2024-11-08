import { Box } from "@mui/material";
import { SearchLayoutInterface } from "@nations-hub/components/Layout/SearchLayout/interface";
import { SearchLayoutStyle } from "@nations-hub/components/Layout/SearchLayout/SearchLayoutStyle";
import SearchForm from "@nations-hub/components/UI/Form/Search/SearchForm";
import { COUNTRIES_ROUTE } from "@nations-hub/pages/Countries/routes";
import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SearchLayout: FC<SearchLayoutInterface> = (props) => {

    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const countryName = queryParams.get('name');

    const handleSearch = (search: string) => {
        navigate(COUNTRIES_ROUTE(search));
    };

    return <Box sx={SearchLayoutStyle}>
        <SearchForm onSubmit={handleSearch} defaultValue={countryName} />
        {props.children}
    </Box>
}

export default SearchLayout;
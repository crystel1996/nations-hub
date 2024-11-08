import { useMediaQuery, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, TextField } from "@mui/material";
import { SearchFormInterface } from "@nations-hub/components/UI/Form/Search/interface";
import { FC } from "react";
import { useForm } from "react-hook-form";
import {SearchFormInputStyle, SearchFormStyle, SearchFormSubmitStyle} from "@nations-hub/components/UI/Form/Search/SearchFormStyle";

const SearchForm: FC<SearchFormInterface> = () => {

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={SearchFormStyle({ isSmallScreen })}
            >
                {/* Search Input */}
                <TextField
                    {...register('search')}
                    variant="outlined"
                    placeholder="Search the country..."
                    size="small"
                    fullWidth={isSmallScreen}
                    sx={SearchFormInputStyle({ isSmallScreen })}
                />

                {/* Submit Button */}
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth={isSmallScreen}
                    sx={SearchFormSubmitStyle({ theme })}
                    startIcon={<SearchIcon />}
                >
                Search
                </Button>
            </Box>
}

export default SearchForm;
import { ArrowBack } from "@mui/icons-material";
import { Box, Button, List, ListItem, ListItemText } from "@mui/material";
import CountryStyle from "@nations-hub/components/Country/CountryStyle";
import { CountryComponentInterface } from "@nations-hub/components/Country/interface";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const Country: FC<CountryComponentInterface> = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return <Box sx={CountryStyle.container}>
        <Button 
            variant="contained" 
            onClick={handleBack} 
            sx={{ mb: 2 }}
            startIcon={<ArrowBack />}
        >
            Back
        </Button>
        <Box sx={CountryStyle.detail}>
            <Box>
                <Box component="img" src="" alt="" />
            </Box>
            <Box>
                <List>
                    {[].map((_, index) => {
                        return  <ListItem key={index} disablePadding>
                                    <ListItemText />
                                </ListItem>
                    })}
                </List>
            </Box>
            <Box>
                <List>
                    {[].map((_, index) => {
                        return  <ListItem key={index} disablePadding>
                                    <ListItemText />
                                </ListItem>
                    })}
                </List>
            </Box>
        </Box>
    </Box>
}

export default Country;
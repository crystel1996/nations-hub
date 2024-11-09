import { ArrowBack } from "@mui/icons-material";
import { Box, Button, List, ListItem, ListItemText, Typography, useTheme } from "@mui/material";
import CountryStyle from "@nations-hub/components/Country/CountryStyle";
import { CountryComponentInterface } from "@nations-hub/components/Country/interface";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const Country: FC<CountryComponentInterface> = (props) => {

    const navigate = useNavigate();
    const theme = useTheme();

    const handleBack = () => {
        navigate(-1);
    };

    const items = [
        {label: 'Name', value: props.name},
        {label: 'Continents', value: props.continents},
        {label: 'Population', value: props.population}
    ];

    return <Box sx={CountryStyle.container}>
        <Button 
            variant="contained" 
            onClick={handleBack} 
            sx={{ mb: 2 }}
            startIcon={<ArrowBack />}
        >
            Back
        </Button>
        <Box sx={CountryStyle.detail} bgcolor={theme.palette.background.paper}>
            <Box>
                <Box component="img" src={props.flag.link} alt={props.flag.alt} />
            </Box>
            <Box>
                <List>
                    {items.map((item, index) => {
                        return  <ListItem key={index} disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography variant="body1" component="span" sx={{ fontWeight: 'bold', marginRight: 1 }}>
                                                {item.label}:
                                            </Typography>
                                        }
                                        secondary={
                                            <Typography variant="body2" component="span" color="text.secondary">
                                                {item.value}
                                            </Typography>
                                        }
                                    />
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
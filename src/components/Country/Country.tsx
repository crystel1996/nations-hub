import { ArrowBack } from "@mui/icons-material";
import { Box, Button, List, ListItem, ListItemText, Typography, useTheme } from "@mui/material";
import CountryStyle from "@nations-hub/components/Country/CountryStyle";
import { CountryComponentInterface } from "@nations-hub/components/Country/interface";
import EmbeddedMap from "@nations-hub/components/UI/EmbeddedMap/EmbeddedMap";
import Loading from "@nations-hub/components/UI/Loading/Loading";
import { FC, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const Country: FC<CountryComponentInterface> = (props) => {

    const navigate = useNavigate();
    const theme = useTheme();

    const handleBack = () => {
        navigate(-1);
    };

    const country_geography = useMemo(() => {
        return [
            {label: 'Name', value: props.name},
            {label: 'Continents', value: props.continents},
            {label: 'Regions', value: props.region},
            {label: 'Subregion', value: props.subregion},
            {label: 'Area', value: props.area},
            {label: 'Capital', value: props.capital}
        ]
    }, [props]);

    const country_demographic = useMemo(() => {
        return [
            {label: 'Population', value: props.population},
            {label: 'Currency', value: props.currency},
            {label: 'Resident', value: props.resident},
            {label: 'Languages', value: props.language}
        ]
    }, [props]);

    if(props.loading) {
        return <Loading />
    }

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
                <Typography variant="subtitle1">Geography</Typography>
                <List>
                    {country_geography.map((item, index) => {
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
                <Typography variant="subtitle1">Demographic</Typography>
                <List>
                    {country_demographic.map((item, index) => {
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
        </Box>
        <Box py={2}>
            <EmbeddedMap title={`Map of ${props.name}`} countryName={props.name} zoom={5} />
        </Box>
    </Box>
}

export default Country;
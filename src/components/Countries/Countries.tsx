import { Box, Button, Card, CardContent, CardMedia, Grid, Typography, useTheme } from "@mui/material";
import CountriesStyle from "@nations-hub/components/Countries/CountriesStyle";
import { CountriesComponentInterface } from "@nations-hub/components/Countries/interface";
import SearchLayout from "@nations-hub/components/Layout/SearchLayout/SearchLayout";
import { FC } from "react";

const Countries: FC<CountriesComponentInterface> = (props) => {

    const theme = useTheme();

    const countriesStyle = CountriesStyle({ theme });

    return <SearchLayout>
        <Box sx={countriesStyle.container}>
            <Grid container spacing={2} justifyContent="center">
                {(props.countries || []).map((country) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={country.alpha3Code}>
                    <Card sx={countriesStyle.card}>
                    <CardMedia
                        component="img"
                        alt={`Flag of ${country.name}`}
                        height="200"
                        image={country.flag}
                        sx={countriesStyle.flag}
                    />
                    <CardContent sx={countriesStyle.cardContent}>
                        <Typography variant="h6" component="div" sx={countriesStyle.name}>
                            {country.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Capital: {country.capital}
                        </Typography>
                    </CardContent>
                    <Button
                        href={`/country/${country.alpha3Code}`}
                        variant="contained"
                        color="primary"
                        sx={countriesStyle.viewMore}
                    >
                        View more
                    </Button>
                    </Card>
                </Grid>
                ))}
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Button
                    variant="contained"
                    onClick={props.onLoadMore}
                    disabled={props.loading}
                >
                    {props.loading ? 'Loading...' : 'Load More'}
                </Button>
            </Box>
        </Box>
    </SearchLayout>
}

export default Countries;
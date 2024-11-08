import { Box, Button, Grid, Typography } from "@mui/material";
import CountriesStyle from "@nations-hub/components/Countries/CountriesStyle";
import { CountriesComponentInterface } from "@nations-hub/components/Countries/interface";
import SearchLayout from "@nations-hub/components/Layout/SearchLayout/SearchLayout";
import CardComponent from "@nations-hub/components/UI/Card/Card";
import { FC } from "react";

const Countries: FC<CountriesComponentInterface> = (props) => {

    return <SearchLayout>
        <Box sx={CountriesStyle.container}>
            <Grid container spacing={2} justifyContent="center">
                {(props.countries || []).map((country) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={country.alpha3Code}>
                        <CardComponent 
                            content={
                                <>
                                    <Typography variant="h6" component="div">
                                        Name: {country.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Capital: {country.capital}
                                    </Typography>
                                </>
                            }
                            image={{
                                alt: `Flag of ${country.name}`,
                                link: country.flag
                            }}
                            action={{
                                link: `/country/${country.alpha3Code}`,
                                label: 'View more'
                            }}
                        />
                    </Grid>
                ))}
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Button
                    variant="contained"
                    onClick={props.onLoadMore}
                    disabled={props.loading}
                    size="large"
                >
                    {props.loading ? 'Loading...' : 'Load More'}
                </Button>
            </Box>
        </Box>
    </SearchLayout>
}

export default Countries;
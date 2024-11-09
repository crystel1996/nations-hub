import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import CountriesStyle from "@nations-hub/components/Countries/CountriesStyle";
import { CountriesComponentInterface } from "@nations-hub/components/Countries/interface";
import SearchLayout from "@nations-hub/components/Layout/SearchLayout/SearchLayout";
import CardComponent from "@nations-hub/components/UI/Card/Card";
import Sorting from "@nations-hub/components/UI/Sorting/Sorting";
import { FC } from "react";

const Countries: FC<CountriesComponentInterface> = (props) => {

    return <SearchLayout>
        {props.loading && (
            <Box sx={CountriesStyle.loading}>
                <CircularProgress />
            </Box>
        )}
        <Box sx={CountriesStyle.container}>
            <Box py={2}>
                <Sorting field='name' onSortData={props.onSorting} />
            </Box>
            <Grid container spacing={2} justifyContent="center">
                {!props.loading && (
                    <>
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
                    </>
                )}
            </Grid>
            {!props.loading && (
                <>
                    {!props.isAllDisplay && (
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                            <Button
                                variant="contained"
                                onClick={props.onLoadMore}
                                disabled={props.loading}
                                size="large"
                            >
                                {'Load More'}
                            </Button>
                        </Box>
                    )}
                </>
            )}
        </Box>
    </SearchLayout>
}

export default Countries;
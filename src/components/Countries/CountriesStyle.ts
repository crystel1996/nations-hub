import { SxProps, Theme } from "@mui/material";

const CountriesStyle= ({
    theme
}: {
    theme: Theme
}): Record<string, SxProps>  => {
    return {
        container: {
            flexGrow: 1, 
            padding: 2
        },
        card: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            border: `1px solid ${theme.palette.secondary.main}`,
            backgroundColor: theme.palette.background.paper,
            boxShadow: 3,
            '&:hover': {
                boxShadow: 6,
            },
        },
        flag: {
            objectFit: 'contain',
            borderBottom: `1px solid ${theme.palette.secondary.main}`,
        },
        cardContent: {
            flexGrow: 1
        },
        name: { color: theme.palette.text.primary },
        viewMore: {
            marginBottom: 2,
            backgroundColor: theme.palette.primary.main,
            '&:hover': {
                backgroundColor: theme.palette.primary.dark,
            },
        }
    }
}

export default CountriesStyle;
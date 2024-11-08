import { SxProps } from "@mui/material";

const CardStyle: Record<string, SxProps> = {
    card: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        boxShadow: 3,
        '&:hover': {
            boxShadow: 6,
        },
    },
    cardContent: {
        //flexGrow: 1
    },
    image: {
        objectFit: 'fit',
        height: '160px'
    },
    action: {
        //marginBottom: 2,
    }
}

export default CardStyle;
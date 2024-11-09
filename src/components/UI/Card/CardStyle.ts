import { SxProps } from "@mui/material";

const CardStyle: Record<string, SxProps> = {
    card: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        boxShadow: 3,
        maxWidth: '345px',
        '&:hover': {
            boxShadow: 6,
        },
    },
    cardContent: {
        flexGrow: 1
    },
    image: {
        objectFit: 'cover',
        backgroundSize: 'cover',
        height: '194px',
        width: '100%'
    },
    action: {}
}

export default CardStyle;
import { SxProps } from "@mui/material";

const CountryStyle: Record<string, SxProps> = {
    container: {
        padding: '20px',
        width: '100%'
    },
    detail: {
        height: 'auto',
        borderRadius: '14px',
        padding: '12px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.08)',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    }
}

export default CountryStyle;
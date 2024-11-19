import { SxProps } from "@mui/material";

const CountryStyle: Record<string, SxProps> = {
    container: {
        padding: '20px',
        width: '100%',
        height: 'calc(100vh - 64px)',
        overflowX: 'hidden',
        overflowY: 'auto'
    },
    detail: {
        height: 'auto',
        borderRadius: '14px',
        padding: '12px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.08)',
        display: 'flex',
        justifyContent: 'space-between'
    }
}

export default CountryStyle;
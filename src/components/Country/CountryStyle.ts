import { SxProps } from "@mui/material";

const CountryStyle: Record<string, SxProps> = {
    container: {
        padding: '20px 0',
        width: '100%',
        height: 'calc(100vh - 64px)',
        overflowX: 'hidden',
        overflowY: 'auto'
    },
    detail: {
        height: '200px',
        borderRadius: '14px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.08)'
    }
}

export default CountryStyle;
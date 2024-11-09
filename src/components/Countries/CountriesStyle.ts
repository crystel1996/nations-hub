import { SxProps } from "@mui/material";

const CountriesStyle: Record<string,SxProps> = {
    container: {
        padding: '12px 0'
    },
    loading: {
        width: '100%',
        height: 'calc(100vh - 200px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export default CountriesStyle;
import { SxProps } from "@mui/material";

const HomeStyle: SxProps = {
    margin: '20px 0',
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',
    height: 'calc(100vh - 64px)',
    flexDirection: 'column',
    gap: '32px'
};

const HomeDescriptionStyle: SxProps = {
    '& .content': {
        textAlign: 'justify'
    }
};

export {
    HomeStyle,
    HomeDescriptionStyle
};
import { SxProps, Theme } from "@mui/material";

const SearchFormStyle = ({
    isSmallScreen
}: {
    isSmallScreen: boolean
}): SxProps => {
    return {
        display: 'flex',
        flexDirection: isSmallScreen ? 'column' : 'row',
        alignItems: 'center',
        gap: isSmallScreen ? 2 : 1,
        padding: '0.5rem 1rem'
    }
};

const SearchFormInputStyle = ({
    isSmallScreen
}: {
    isSmallScreen: boolean
}): SxProps => {
    return {
        flexGrow: isSmallScreen ? 0 : 1
    }
}

const SearchFormSubmitStyle = ({
    theme,
}: {
    theme: Theme
}): SxProps => {
    return {
        color: theme.palette.background.default,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}

export {
    SearchFormStyle,
    SearchFormInputStyle,
    SearchFormSubmitStyle
};
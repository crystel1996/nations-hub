import { createTheme } from "@mui/material";
import COLOR from "@nations-hub/utils/color";

const theme = createTheme({
    palette: {
      primary: {
        main: COLOR.earthBlue, 
      },
      secondary: {
        main: COLOR.globalGreen, 
      },
      error: {
        main: COLOR.sunsetOrange, 
      },
      warning: {
        main: COLOR.softCoral, 
      },
      info: {
        main: COLOR.goldenYellow, 
      },
      background: {
        default: COLOR.cloudWhite, 
        paper: COLOR.saharaBeige,  
      },
      text: {
        primary: COLOR.slateBlack, 
        secondary: COLOR.stoneGray, 
      },
    },
    typography: {
      fontFamily: '"Roboto", sans-serif', 
      h1: {
        fontWeight: 700,
        fontSize: '2.5rem',
      },
      h2: {
        fontWeight: 600,
        fontSize: '2rem',
      },
      h3: {
        fontWeight: 500,
        fontSize: '1.75rem',
      },
      body1: {
        fontSize: '1rem',
        color: COLOR.cloudWhite, 
      },
      body2: {
        fontSize: '0.875rem',
        color: COLOR.stoneGray, 
      },
    },
    components: {
      // Customize MUI components
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor: COLOR.globalGreen, 
            color: COLOR.white, 
            '&:hover': {
              backgroundColor: COLOR.darkGreen, 
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: COLOR.earthBlue, 
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: COLOR.saharaBeige, 
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '& fieldset': {
              borderColor: COLOR.globalGreen
            },
            '&:hover fieldset': {
              borderColor: COLOR.globalGreen,
            },
            '&.Mui-focused fieldset': {
                borderColor: COLOR.globalGreen,
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: COLOR.globalGreen,
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: COLOR.globalGreen,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: COLOR.globalGreen,
            },
            '& .MuiOutlinedInput-input': {
              color: COLOR.white,
            },
            '& .MuiInputLabel-root': {
              color: COLOR.white,
            },
            '&.Mui-focused .MuiInputLabel-root': {
              color: COLOR.white,
            },
          }
        }
      }
    },
  });
  
export default theme;
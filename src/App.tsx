import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import ROUTE from '@nations-hub/routes/routes';
import store from '@nations-hub/store/store';
import theme from '@nations-hub/utils/theme';
import AppStyle from './AppStyle';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <Box sx={AppStyle}>
          <RouterProvider router={ROUTE} />
        </Box>
      </Provider>
    </ThemeProvider>
  )
}

export default App

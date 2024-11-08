import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import ROUTE from '@nations-hub/routes/routes';
import store from '@nations-hub/store/store';
import theme from '@nations-hub/utils/theme';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <RouterProvider router={ROUTE} />
      </Provider>
    </ThemeProvider>
  )
}

export default App

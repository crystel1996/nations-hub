import { RouterProvider } from 'react-router-dom';
import ROUTE from '@nations-hub/routes/routes';
import './App.css'

function App() {

  return (
    <RouterProvider router={ROUTE} />
  )
}

export default App

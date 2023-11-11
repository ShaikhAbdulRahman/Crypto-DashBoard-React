import React from 'react'
import Dashboard from './pages/Dashboard/Dashboard'
import { RouterProvider } from 'react-router-dom'
import {
  createBrowserRouter,
} from "react-router-dom";
import Support from './pages/Support/Support';
import TransactionPage from './pages/Transaction/Transaction';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>
  },
  {
    path: "/transaction",
    element: <TransactionPage/>
  },
  {
    path: "/support",
    element: <Support/>
  },
]);
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
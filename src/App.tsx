import Info from './components/infoPage/infoPage';
import Creator from './components/creatorPage/creator';
import Home from './components/homePage/home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/creator",
    element: <Creator />,
  },
  {
    path: "/info",
    element: <Info />,
  },
]);

export default function App() {
  return (
    <div className='app'>
      <RouterProvider router={router} />
      <div className='app_links'>
      </div>
    </div>
  )
}
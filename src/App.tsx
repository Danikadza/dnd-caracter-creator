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
    path: "/dnd-caracter-creator/",
    element: <Home />,
  },
  {
    path: "/dnd-caracter-creator/creator",
    element: <Creator />,
  },
  {
    path: "/dnd-caracter-creator/info",
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
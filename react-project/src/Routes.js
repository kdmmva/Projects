import About from "./About";
import Catalog from "./Catalog";
import Home from "./Home";
import Main from "./Main";
import News from "./News";
import Login from "./Login";
import Register from "./Register";

const children = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: " about",
    element: <About />,
  },
  {
    path: "catalog",
    element: <Catalog />,
  },
  {
    path: "news",
    element: <News />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
];

const Routes = [
  {
    path: "/",
    element: <Main />,
    children: children,
  },
];

export default Routes;

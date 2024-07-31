import About from './components/About';
import Catalog from './components/Catalog';
import Home from './components/Home';
import Main from './components/Main';
import News from './components/News';
import Login from './components/Login';
import Register from './components/Register';

const children = [
  { path: "/", element: <Home /> },
  { path: "home", element: <Home /> },
  { path: "about", element: <About /> },
  { path: "catalog", element: <Catalog /> },
  { path: "news", element: <News /> },
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
];

const Routes = [
  { path: "/", element: <Main />, children: children },
];

export default Routes;

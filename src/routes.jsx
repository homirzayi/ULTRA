import Home from "./pages/HomePage/Home";
import Services from "./pages/Services/Services";
import Products from "./pages/Products/Products";
import Signup from "./pages/Signup/Signup";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
];

export default routes;

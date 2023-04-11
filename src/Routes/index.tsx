import Home from '../Pages/HomePage';
import ProductDetails from '../Pages/ProductsDetails';
import SignUp from '../Pages/Sign Up';

const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/signup',
    component: SignUp,
  },
  {
    path: '/productdetails/:id',
    component: ProductDetails,
  },
];

const privateRoutes: object = [];

export { privateRoutes, publicRoutes };

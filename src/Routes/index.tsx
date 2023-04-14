import Home from '../Pages/HomePage';
import Login from '../Pages/Login';
import ProductDetails from '../Pages/ProductsDetails';

const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/productdetails/:id',
    component: ProductDetails,
  },
];

const privateRoutes: object = [];

export { privateRoutes, publicRoutes };

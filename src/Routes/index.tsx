import About from '../Pages/About';
import Account from '../Pages/Account';
import Cart from '../Pages/Cart';
import Contact from '../Pages/Contact';
import Error from '../Pages/Error';
import Home from '../Pages/HomePage';
import Login from '../Pages/Login';
import Products from '../Pages/Products';
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
  {
    path: '/about',
    component: About,
  },
  {
    path: '/account',
    component: Account,
  },
  {
    path: '/contact',
    component: Contact,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/products',
    component: Products,
  },
  {
    path: '*',
    component: Error,
  },
];

const privateRoutes: object = [];

export { privateRoutes, publicRoutes };

import About from '../Pages/About';
import Account from '../Pages/Account';
import Contact from '../Pages/Contact';
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
  {
    path: '/account',
    component: Account,
  },
  {
    path: '/contact',
    component: Contact,
  },
  {
    path: '/about',
    component: About,
  },
];

const privateRoutes: object = [];

export { privateRoutes, publicRoutes };

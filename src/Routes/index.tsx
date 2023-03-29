import Home from '../Pages/HomePage';
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
];

const privateRoutes: object = [];

export { privateRoutes, publicRoutes };

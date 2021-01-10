import LandingPage from './containers/LandingPage';
import CheckoutPage from './containers/CheckoutPage';
import NotFound from './containers/NotFound';

export default [
  {
    exact: true,
    path: '/',
    component: LandingPage,
    key: 'landing'
  },
  {
    exact: true,
    path: '/checkout',
    component: CheckoutPage,
    key: 'checkout'
  },
  {
    component: NotFound,
    key: 'notfound'
  }
];

import classNames from 'classnames/bind';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import styles from './App.module.scss';
import Footer from './Layouts/Footer';
import Header from './Layouts/Header';
import { publicRoutes } from './Routes';

const cx = classNames.bind(styles);

const App = () => {
  return (
    <Router>
      <div className={cx('wrapper')}>
        <Header />
        <div className={cx('container')}>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} />;
            })}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './Layouts/Footer';
import Header from './Layouts/Header';
import { publicRoutes } from './Routes';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Page />} />;
        })}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

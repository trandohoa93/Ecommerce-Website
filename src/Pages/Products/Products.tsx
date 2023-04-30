import classNames from 'classnames/bind';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Filter from '../../Components/Filters/Filter';
import ProductList from '../../Components/ProductList';
import Sort from '../../Components/Sort';
import styles from './Products.module.scss';

const cx = classNames.bind(styles);

function Products() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('roadtext')}>
        <Link className={cx('main')} to="/">
          Home <span>/ </span>
        </Link>
        <span className={cx('sub')}>Products</span>
      </div>
      <div className={cx('page')}>
        <div className={cx('section-center')}>
          <Filter />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;

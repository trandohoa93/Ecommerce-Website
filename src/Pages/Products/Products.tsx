import classNames from 'classnames/bind';
import React, { useEffect } from 'react';

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
        <span className={cx('main')}>
          Home <span>/ </span>
        </span>
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

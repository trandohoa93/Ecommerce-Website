import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllProducts } from '../../Api/projectAPI';
import { RootState } from '../../App/store';
import GridView from '../GridView';
import ListView from '../ListView';
import styles from './ProductList.module.scss';

const cx = classNames.bind(styles);

const ProductList = () => {
  const dispatch = useDispatch<any>();

  const products = useSelector((state: RootState) => state.product.data);
  const grid_view = useSelector((state: RootState) => state.product.grid_view);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  if (products.length < 1) {
    return <p>Sorry, no products matched your search...</p>;
  }
  if (grid_view) {
    return <ListView products={products} />;
  }
  return <GridView products={products} />;
};
export default ProductList;

import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../App/store';
import {
  setGridView,
  setListView,
  sortProduct,
  updateSort,
} from '../../Features/Product/getAllProductSlice';
import styles from './Sort.module.scss';
const cx = classNames.bind(styles);

const Sort = () => {
  const dispatch = useDispatch<any>();

  const grid_view = useSelector((state: RootState) => state.product.grid_view);
  const sort = useSelector((state: RootState) => state.product.sort);
  useEffect(() => {
    // dispatch({ type: FILTER_PRODUCTS });
    dispatch(sortProduct());
  }, [sort]);
  const handleSetGridView = () => {
    dispatch(setGridView());
  };

  const handleSetListView = () => {
    dispatch(setListView());
  };
  const handleUpdateSort = (e: any) => {
    const value = e.target.value;
    dispatch(updateSort(value));
  };
  return (
    <section className={cx('wrapper')}>
      <div className={cx('btn-container')}>
        <button
          type="button"
          className={cx({ grid_view: grid_view })}
          onClick={handleSetGridView}
        >
          <BsFillGridFill />
        </button>
        <button
          type="button"
          className={cx({ grid_view: !grid_view })}
          onClick={handleSetListView}
        >
          <BsList />
        </button>
      </div>
      <p>22 product found</p>
      <hr />
      <form>
        <select
          name="sort"
          id="sort"
          className={cx('sort-input')}
          value={sort}
          onChange={(e) => handleUpdateSort(e)}
        >
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a-z)</option>
          <option value="name-z">name (z-a)</option>
        </select>
      </form>
    </section>
  );
};
export default Sort;

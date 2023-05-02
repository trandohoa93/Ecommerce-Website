import classNames from 'classnames/bind';
import queryString from 'query-string';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getAllCategories } from '../../Api/projectAPI';
import { RootState } from '../../App/store';
import {
  clearFilters,
  filterProducts,
  updateFilters,
} from '../../Features/Product/getAllProductSlice';
import Button from '../Button';
import styles from './Filter.module.scss';

const cx = classNames.bind(styles);

const Filter = () => {
  const navigate = useNavigate();
  const { category: locationCategory } = queryString.parse(location.search);

  const categories = useSelector((state: RootState) => state.categories.data);
  const filters = useSelector((state: RootState) => state.product.filters);
  const min_price = useSelector((state: RootState) => state.product.filters.min_price);
  const max_price = useSelector((state: RootState) => state.product.filters.max_price);
  const price = useSelector((state: RootState) => state.product.filters.price);
  const category = useSelector((state: RootState) => state.product.filters.category);

  const allCategories = ['all', ...categories];

  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(filterProducts());
  }, [filters]);

  const handleUpdateFilters = (e: any) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === 'category') {
      value = e.target.textContent;
      navigate(`/products?category=${value}`);
    }
    if (name === 'price') {
      value = Number(value);
    }
    dispatch(updateFilters({ name, value }));
  };
  const handleClearFilters = (e: any) => {
    dispatch(clearFilters());
  };
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);
  useEffect(() => {
    if (locationCategory) {
      dispatch(updateFilters({ name: 'category', value: locationCategory }));
    }
  }, []);

  return (
    <section>
      <div className={cx('content')}>
        <form onSubmit={(e) => e.preventDefault}>
          {/* Search Input */}
          <div className={cx('form-control')}>
            <input
              type="text"
              name="text"
              placeholder="search"
              className={cx('search-input')}
              value={filters.text}
              onChange={handleUpdateFilters}
            />
          </div>
          {/* Search Input*/}
          {/* Categories */}
          <div className={cx('form-control')}>
            <div className={cx('form-title')}>Category</div>
            {allCategories.map((c, index) => {
              return (
                <button
                  key={index}
                  onClick={handleUpdateFilters}
                  type="button"
                  name="category"
                  className={cx('button', { active: category === c.toLowerCase() })}
                >
                  {c}
                </button>
              );
            })}
          </div>
          {/* Categories */}
          {/* price */}
          <div className={cx('form-control')}>
            <div className={cx('form-title')}>Price</div>
            <p className="price">{price}$</p>
            <input
              type="range"
              name="price"
              onChange={handleUpdateFilters}
              max={max_price}
              min={min_price}
              value={price}
            />
          </div>
          {/* end of rice */}
          {/* shipping */}
        </form>
        <Button color="secondary" onClick={handleClearFilters}>
          Clear Filter
        </Button>
      </div>
    </section>
  );
};
export default Filter;

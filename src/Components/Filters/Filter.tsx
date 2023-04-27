import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllCategories } from '../../Api/projectAPI';
import { RootState } from '../../App/store';
import Button from '../Button';
import styles from './Filter.module.scss';

const cx = classNames.bind(styles);

const Filter = () => {
  const categories = useSelector((state: RootState) => state.categories.data);
  const allCategories = ['all', ...categories];

  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getAllCategories());
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
                  type="button"
                  name="category"
                  className={cx('button')}
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
            {/* <p className="price">{formatPrice(price)}</p> */}
            <input
              type="range"
              name="price"
              // onChange={updateFilters}
              // max={max_price}
              // min={min_price}
              // value={price}
            />
          </div>
          {/* end of rice */}
          {/* shipping */}
        </form>
        <Button color="secondary" onClick={() => console.log('hehe')}>
          Clear Filter
        </Button>
      </div>
    </section>
  );
};
export default Filter;

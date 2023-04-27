import classNames from 'classnames/bind';
import { BsFillGridFill, BsList } from 'react-icons/bs';

import styles from './Sort.module.scss';

const cx = classNames.bind(styles);

const Sort = () => {
  return (
    <section className={cx('wrapper')}>
      <div className={cx('btn-container')}>
        <button
          type="button"
          // className={`${grid_view ? 'active' : null}`}
          // onClick={setGridView}
        >
          <BsFillGridFill />
        </button>
        <button
          type="button"
          // className={`${!grid_view ? 'active' : null}`}
          // onClick={setListView}
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
          // value={sort}
          // onChange={updateSort}
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

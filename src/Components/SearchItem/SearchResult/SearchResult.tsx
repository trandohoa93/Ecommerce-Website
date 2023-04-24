import classNames from 'classnames/bind';

import styles from './SearchResult.module.scss';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductsListProps {
  results: Array<Product>;
  showSearchResult: any;
}

const cx = classNames.bind(styles);

function SearchResult({ results, showSearchResult }: ProductsListProps) {
  if (!results.length) return null;
  return (
    <div className={cx('search-result', { show: showSearchResult })}>
      <ul className={cx('suggest_search')}>
        {results.map((item) => {
          return (
            <li key={item.id} className={cx('suggest-item')}>
              <div className={cx('item-img')}>
                <img src={item.image} alt="laptop" />
              </div>
              <div className={cx('item-info')}>
                <p>{item.title}</p>
                <p className={cx('price')}>{item.price}₫</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SearchResult;

import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { searchItem } from '@/Features/Product/getAllProductSlice';

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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick(id: any) {
    navigate(`/productdetails/${id}`);
    dispatch(searchItem(''));
  }

  if (!results.length) return null;
  console.log(showSearchResult);
  return (
    <div className={cx('search-result', { show: showSearchResult })}>
      <ul className={cx('suggest_search')}>
        {results.map((item) => {
          return (
            <button
              key={item.id}
              className={cx('suggest-item')}
              onClick={() => handleClick(item.id)}
            >
              <div className={cx('item-img')}>
                <img src={item.image} alt="laptop" />
              </div>
              <div className={cx('item-info')}>
                <p>{item.title}</p>
                <p className={cx('price')}>{item.price}₫</p>
              </div>
            </button>
          );
        })}
      </ul>
    </div>
  );
}

export default SearchResult;

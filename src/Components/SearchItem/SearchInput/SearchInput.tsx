import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../App/store';
import Search from '../../../Assets/Images/Search.svg';
import { searchItem } from '../../../Features/Product/getAllProductSlice';
import styles from './SearchInput.module.scss';

const cx = classNames.bind(styles);

interface Props {
  setReSults: (e?: any) => void;
}

function SearchInput(prop: Props) {
  const valueData = useSelector((state: RootState) => state.product.searchItem);
  const dispatch = useDispatch();
  const { setReSults } = prop;
  const [input, setInput] = useState('');

  const handleChange = (value: any) => {
    setInput(value);
    dispatch(searchItem(value));
  };

  useEffect(() => {
    setReSults(valueData);
  }, [valueData, setReSults]);

  return (
    <div className={cx('search-input')}>
      <input
        placeholder="What are you looking for?"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button className={cx('clear')}>
        <img src={Search} alt="Search" />
      </button>
    </div>
  );
}

export default SearchInput;

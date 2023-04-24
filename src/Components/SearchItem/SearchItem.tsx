import { useRef, useState } from 'react';

import useOutsideSearch from '../../hooks/useOutsideSearch';
import SearchInput from './SearchInput/SearchInput';
import SearchResult from './SearchResult/SearchResult';

function SearchItem() {
  const [results, setResults] = useState([]);
  const [showSearchResult, setShowSearchResult] = useState<boolean>(false);
  const wrapperRef = useRef(null);
  useOutsideSearch(wrapperRef, setShowSearchResult);

  return (
    <div
      ref={wrapperRef}
      onClick={() => setShowSearchResult(false)}
      onKeyDown={() => console.log('hehe')}
      role="button"
      tabIndex={0}
    >
      <SearchInput setReSults={setResults} />
      <SearchResult results={results} showSearchResult={showSearchResult} />
    </div>
  );
}

export default SearchItem;

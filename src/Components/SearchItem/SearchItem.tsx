import { useState } from 'react';

import SearchInput from './SearchInput/SearchInput';
import SearchResult from './SearchResult/SearchResult';

function SearchItem() {
  const [results, setResults] = useState([]);

  return (
    <>
      <SearchInput setReSults={setResults} />
      <SearchResult results={results} />
    </>
  );
}

export default SearchItem;

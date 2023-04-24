import React, { useEffect } from 'react';

interface Props {
  ref: any;
  setShowSearchResult: any;
}

function useOutsideSearch(ref: any, setShowSearchResult: any) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowSearchResult(true);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

export default useOutsideSearch;

import React, { useEffect } from 'react';

interface Props {
  ref: any;
  setHandleDropdown: any;
}

function useOutsideAlerter(ref: any, setHandleDropdown: any) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setHandleDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

export default useOutsideAlerter;

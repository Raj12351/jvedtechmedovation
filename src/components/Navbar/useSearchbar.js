import React from 'react';

const useSearchbar = () => {
  const [isSearchbarOpen, setSearchbarOpen] = React.useState(false);
  const searchbarRef = React.useRef(null);

  const toggleSearchbar = () => {
    setSearchbarOpen(!isSearchbarOpen);
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchbarRef.current &&
        !searchbarRef.current.contains(event.target)
      ) {
        setSearchbarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return { isSearchbarOpen, toggleSearchbar, searchbarRef };
};

export default useSearchbar;

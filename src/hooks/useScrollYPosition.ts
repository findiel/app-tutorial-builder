import { useState, useEffect } from 'react';

function useScrollYPosition() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const getScrollYPosition = () => {
    setScrollPosition(window.scrollY + window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', getScrollYPosition);

    return () => window.removeEventListener('scroll', getScrollYPosition);
  }, []);

  return scrollPosition;
}

export default useScrollYPosition;

import { useEffect, useState } from 'react';

export default function useScrollPosition() {
  const [position, setPosition] = useState(0);

  function onScroll() {
    setPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return position;
}

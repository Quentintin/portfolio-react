import { useEffect, useState } from 'react';

export default function useScrollPosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY });

    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return position;
}

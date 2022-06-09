import useScrollPosition from '../utils/hooks/useScrollPosition';
import useMousePosition from '../utils/hooks/useMousePosition';

import './StarsParallax.scss';

export default function StarsParallax() {
  const scrollPosition = useScrollPosition();
  const mousePosition = useMousePosition();

  return (
    <>
      <div
        id="stars-medium"
        style={{
          transform: `translateY(${
            scrollPosition / 1.5 - mousePosition.y / 120
          }px)  translatex(-${mousePosition.x / 400}px)`,
        }}></div>
      <div
        id="stars-large"
        style={{
          transform: `translateY(${scrollPosition / 3 - mousePosition.y / 40}px) translatex(-${
            mousePosition.x / 160
          }px)`,
        }}></div>
    </>
  );
}

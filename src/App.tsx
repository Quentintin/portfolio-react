import { Suspense, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage';
import Spinner from './components/Spinner';

import './App.scss';

function App() {
  const [scrollLevel, setScrollLevel] = useState(0);

  useEffect(() => {
    const handleScroll = (e: any) => {
      setScrollLevel(window.pageYOffset || document.documentElement.scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <div id="stars0" style={{ transform: `translateY(${scrollLevel / 1.5}px)` }}></div>
      <div id="stars1" style={{ transform: `translateY(${scrollLevel / 2}px)` }}></div>
      <div id="stars2" style={{ transform: `translateY(${scrollLevel / 2.5}px)` }}></div>
      <div id="stars3" style={{ transform: `translateY(${scrollLevel / 3}px)` }}></div>

      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

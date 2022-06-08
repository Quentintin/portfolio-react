import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage';
import Spinner from './components/Spinner';

import './App.scss';
import StarsParallax from './components/StarsParallax';

function App() {
  return (
    <div className="main">
      <StarsParallax />
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

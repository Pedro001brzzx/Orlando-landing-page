import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './styles/global.css';
import Home from './views/pages/Home';
import Checkout from './views/pages/Checkout';
import Branding from './views/pages/Branding';
import CheckoutPage2 from './views/pages/CheckoutPage2';
import { Cursor } from './views/components/Cursor';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Cursor />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/webdesign" element={<Branding />} />
          <Route path="/checkout2" element={<CheckoutPage2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

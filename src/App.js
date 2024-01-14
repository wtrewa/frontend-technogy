import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import Home from './pages/HomePage';
import ProductPages from './pages/ProductPages';
import Cart from './pages/Cart';
import SignUp from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import CheckoutPage from './pages/CheckoutPage';
import SingleProductPage from './pages/SingleProductPage';
import Loading from './components/Loading';
import { Text } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductPages />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/product/:id" element={<SingleProductPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Text fontSize={'xx-large'} textAlign={'center'} fontWeight={'900'} >404 Page Not Found</Text>} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

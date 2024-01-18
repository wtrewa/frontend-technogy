import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import Home from './pages/HomePage';
import ProductPages from './pages/ProductPages';
import SignUp from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import CheckoutPage from './pages/CheckoutPage';
import SingleProductPage from './pages/SingleProductPage';
import Loading from './components/Loading';
import { Box, Text } from '@chakra-ui/react';
import CartPage from './pages/CartPage';

function App() {
  return (
    <Suspense fallback={<Loading />}>
    <div className="App">
      <Box fontFamily='rootfonts'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductPages />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/product/:id" element={<SingleProductPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Text fontSize={'xx-large'} textAlign={'center'} fontWeight={'900'} >404 Page Not Found</Text>} />
        </Routes>
      </Box>
    </div>
    </Suspense>
  );
}

export default App;

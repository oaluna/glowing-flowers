import React, { useRef
, useEffect } from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { checkUserSession } from './redux/user/user.action';
import { CartContextProvider } from './context/CartContext';
import { AuthContextProvider } from './context/AuthContext';
import { useCartContext } from './context/CartContext';
import { useAuthContext } from './context/AuthContext';
import useOutsideClick from './hooks/useOutsideClick';
import CheckoutPage from './pages/checkout/CheckoutPage'
import ProductsPage from './pages/product/ProductsPage';
import ProductPage from './pages/product/ProductPage';
import PrivateRoute from './pages/login/PrivateRoute';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/login/RegisterPage';
import ResetPage from './pages/login/ResetPage';
import AccountPage from './pages/login/AccountPage';
import SearchPage from './pages/search/SearchPage';
import NavBar from './components/navigation/NavBar';
import { Cart } from './components/cart/Cart';
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

function Root() {
  const { cartOpen, open } = useCartContext();
  const { items } = useCartContext();
  const { isAuthenticated } = useAuthContext();

  const ref = useRef();


  useOutsideClick(ref, () => {
    open(false);
  });

  return (
    <div className="App">
      <NavBar />

      {cartOpen && (
        <div ref={ref}>
          <Cart />
        </div>
      )}
      <div>
         <ErrorBoundary>
        <Routes>
          <Route exact path="/" element={<ProductsPage />} />
          <Route exact path="/products/:category" element={<ProductsPage />} />
          <Route exact path="/products/page/:id" element={<ProductPage />} />
          <Route exact path="/checkout" element={<CheckoutPage />}/>
          <Route
            exact
            path="/account"
            element={
              <PrivateRoute>
                <AccountPage />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/account/login"
            element={
              isAuthenticated ? <Navigate to="/account" /> : <LoginPage />
            }
          />
          <Route
            exact
            path="/account/register"
            element={
              isAuthenticated ? <Navigate to="/account" /> : <RegisterPage />
            }
          />
          <Route exact path="/reset" element={<ResetPage />} />
          <Route exact path="/search" element={<SearchPage />} />
        </Routes>
          </ErrorBoundary>
      </div>
      <footer style={{ width: '100%', textAlign: 'center' }}>
        &copy; 2022 website design by{' '}
        <a href="https://oscarluna.dev">Oscar Armando Luna</a> All rights
        reserved.
      </footer>
    </div>
  );
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  });

  return (
    <>
      <CartContextProvider>
        <AuthContextProvider>
          <Root />
        </AuthContextProvider>
      </CartContextProvider>
    </>
  );
}

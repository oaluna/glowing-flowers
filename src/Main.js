import React from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'
import { useAuthContext } from './context/AuthContext';

import CheckoutPage from './pages/checkout/checkout.page'
import ProductsPage from './pages/product/ProductsPage';
import ProductPage from './pages/product/ProductPage';
import PrivateRoute from './pages/login/PrivateRoute';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/login/RegisterPage';
import ResetPage from './pages/login/ResetPage';
import AccountPage from './pages/login/AccountPage';
import SearchPage from './pages/search/SearchPage';

//import ErrorBoundary from './components/error-boundary/error-boundary.component'

const Main = () => {
  const { isAuthenticated } = useAuthContext();
  return (
 <>
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
    </>
  )
}

export default Main

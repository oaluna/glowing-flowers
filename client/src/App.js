import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/header/header.component";
import Spinner from "./components/spinner/spinner.component";

import { checkUserSession } from "./redux/user/user.actions";

const Contact = lazy(() => import("./pages/contact/contact.component"));
const Shop = lazy(() => import("./pages/shop/shop.component"));
const Checkout = lazy(() => import("./pages/checkout/checkout.component"));
const Home = lazy(() => import("./pages/homepage/homepage.component"));
const SignInAndSignUp = lazy(() =>
  import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.component")
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Suspense fallback={<Spinner />}>
      <Header />
      <AnimatePresence mode="sync">
        <Routes>
          <Route index path="*" element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signin" element={<SignInAndSignUp />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

export default App;

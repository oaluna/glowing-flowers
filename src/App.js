import React, { useRef, useEffect } from "react";
import Main from "./Main";
import "./App.css";
import { useDispatch } from "react-redux";
import { checkUserSession } from "./redux/user/user.action";
import { CartContextProvider } from "./context/CartContext";
import { AuthContextProvider } from "./context/AuthContext";
import { useCartContext } from "./context/CartContext";
import useOutsideClick from "./hooks/useOutsideClick";

import NavBar from "./components/navigation/NavBar";
import { Cart } from "./components/cart/Cart";
import Footer from "./components/footer/footer.component";

function Root() {
  const { cartOpen, open } = useCartContext();
  const { items } = useCartContext();

  const ref = useRef();

  useOutsideClick(ref, () => {
    open(false);
  });

  return (
    <div className="App">
      <NavBar />
      {cartOpen && (
        <div ref={ref}>
          <Cart items={items}/>
        </div>
      )}
      <Main />
      <Footer />
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

import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { motion } from "framer-motion";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

const CheckoutPage = ({ cartItems, total }) => (
  <motion.div
     initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
  >
    <div className="w-1/2 min-h-[90vh] flex flex-col items-center mt-[50px] mb-0 mx-auto">
      <div className="w-full h-[40px] flex justify-between border-b-2 font-[Urbanist]">
        <div className="uppercase w-[23%] last:w-[8%]">
          <span>Product</span>
        </div>
        <div className="uppercase w-[23%] last:w-[8%]">
          <span>Description</span>
        </div>
        <div className="uppercase w-[23%] last:w-[8%]">
          <span>Quantity</span>
        </div>
        <div className="uppercase w-[23%] last:w-[8%]">
          <span>Price</span>
        </div>
        <div className="uppercase w-[23%] last:w-[8%]">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="mt-[30px] ml-auto text-md">
        TOTAL: ${total.toFixed(2)}
      </div>

      <StripeCheckoutButton price={total} />
    </div>
  </motion.div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);

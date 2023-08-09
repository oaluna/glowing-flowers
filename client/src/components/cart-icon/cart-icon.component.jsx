import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { ShoppingCartIcon } from "@heroicons/react/24/outline"

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div
    className="w-8 h-8 relative flex items-start justify-end cursor-pointer"
    onClick={toggleCartHidden}
  >
    <ShoppingCartIcon
    />
    <span className="absolute text-xs w-4 h-4 font-bold bg-blue-300 rounded-full bottom-0 text-center">
      {itemCount}
    </span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

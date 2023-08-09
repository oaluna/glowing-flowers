import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";

import { HomeIcon } from "@heroicons/react/24/outline";


const Header = ({ currentUser, hidden, signOutStart }) => (
<header className="bg-white fixed top-0 w-screen h-auto z-20">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <Link to="/">
        <HomeIcon height={"16"} width={"16"}/>
      </Link>
		<div className="md:flex md:items-center md:mx-auto md:gap-12 font-[Urbanist]">
      <Link
        className="text-slate-900 p-0 lg:p-[25px] h-full text-sm font-semibold cursor-pointer hover:text-pink-600"
        to="/shop"
      >
        SHOP
      </Link>
      <Link
        className="text-slate-900 p-0 lg:p-[25px] h-full text-sm font-semibold cursor-pointer hover:text-pink-600"
        to="/contact"
      >
        CONTACT
      </Link>
      {currentUser ? (
        <Link
          className="text-slate-900 p-0 lg:p-[25px] h-full text-sm font-semibold cursor-pointer hover:text-pink-600"
          onClick={signOutStart}
        >
          SIGN OUT
        </Link>
      ) : (
        <Link
          className="text-slate-900 p-0 lg:p-[25px] h-full text-sm font-semibold cursor-pointer hover:text-pink-600"
          to="/signin"
        >
          SIGN IN
        </Link>
      )}
    </div>
      <CartIcon />
    {hidden ? null : <CartDropdown />}
		</div>
		</div>
  </header>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

import React from "react";
import { connect } from "react-redux";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItem }) => {
  const { name, pricingText, description, imageUrl } = item;

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5 w-screen overflow-hidden">
			<div className="card-compact rounded-lg bg-gray-50 shadow-sm dark:bg-neutral-700 h-full w-[320px] overflow-hidden p-0">

      <div className="relative p-0 rounded-t-lg h-64 max-w-full object-contain overflow-x-hidden bg-gradient-to-tr from-rose-200 to-amber-200 overflow-hidden">
        <img src={imageUrl} alt="item" className="object-contain"/>
        <p className="absolute w-full h-full text-left font-[Urbanist] leading-tight opacity-0 hover:opacity-100 p-6 bg-slate-900/50 flex flex-row items-center -bottom-10 hover:bottom-0 transform transition-all text-slate-100 z-10">
          {description}
        </p>
				
      </div>

      <div className="p-6">
        <h5 className="mb-2 text-xl font-light font-[Urbanist] leading-tight text-neutral-800 dark:text-neutral-50">
          {name}
        </h5>
        <p className="mb-4 text-base font-[Urbanist] text-amber-600 dark:text-neutral-100">
          $ {pricingText.toFixed(2)}
        </p>
      </div>
      <button
        className="flex flex-row items-center mx-auto justify-between rounded bg-amber-900 px-6 py-2 text-xl font-light leading-normal text-gray-50 shadow-sm transition duration-150 font-[Urbanist] ease-in-out min-w-[65%] hover:bg-amber-600"
        onClick={() => addItem(item)}
        inverted
      >
        Add to cart
        <ShoppingCartIcon width={"24px"} height={"24px"} px={5} />
      </button>
			</div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);

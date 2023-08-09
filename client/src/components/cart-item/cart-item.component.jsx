import React from 'react';

const CartItem = ({ item: { imageUrl, pricingText, name, quantity }}) => (
  <div className="w-96 space-x-5 flex flex-row items-center justify-between h-[120px] mb-[15px] ml-0 pl-0 overflow-visible">
    <img className="w-1/4 overflow-visible h-1/2" src={imageUrl} alt='item' />
    <div className="flex flex-row items-center justify-center mt-[10px] w-3/4">
      <span className="text-slate-900 w-3/4 pt-[10px] flex flex-row items-center text-xl mb-3 justify-center">{name}</span>{' '}{' '}
      <span className="flex justify-center mx-5 font-thin tracking-tight text-slate-600 flex-column">
        {quantity}<span className="w-1"/><small>x</small> <span className="w-1"/>{' '}
				</span>
				<span className="z-10 flex justify-center w-1/4 -mr-12 font-thin tracking-tight text-pink-800 flex-column">{`$` + `${pricingText.toFixed(2)}`}
      </span>
    </div>
  </div>
);

export default CartItem;

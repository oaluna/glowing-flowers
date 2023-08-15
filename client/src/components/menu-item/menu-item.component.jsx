import React from "react";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ title, size, imageUrl, linkUrl }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-row items-center card-compact h-96 overflow-hidden shadow-xl image-full space-x-0 my-5 bg-gradient-to-br from-rose-200 to-amber-200 rounded-lg"
      size={size}
      onClick={() => navigate(`${linkUrl}`)}
    >
      <figure>
        <img className="background-image" src={imageUrl} alt="menu-item" />
      </figure>
      <div className="card-body mr-5 text-right">
        <h2 className="card-title font-[Urbanist] font-light text-7xl">
          {title}
        </h2>
        <div className="w-full h-full flex flex-column items-end justify-end">
          <button className="btn btn-primary bg-rose-500 text-gray-50 hover:bg-amber-500 border-none py-1 px-3">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;

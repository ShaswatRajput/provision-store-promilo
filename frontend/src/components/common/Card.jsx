import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import "../../styles/components/Card.css";

const Card = (props) => {
  const [favourite, setFavourite] = useState(false);

  const toggle = () => {
    setFavourite(!favourite);
  };

  return (
    <div>
      <div className="card">
        <img
          src={props.product.productCategory.productCategoryImage}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <p>
            {props.product.productCategory.productCategoryName.slice(0, 33)}
          </p>
          {favourite ? (
            <FaHeart onClick={toggle} />
          ) : (
            <FaRegHeart onClick={toggle} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

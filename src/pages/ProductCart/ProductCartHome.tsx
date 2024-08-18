/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";
// import { Button } from "@mui/material";
// import { Button } from "@mui/material";
import { useAppDispatch } from "../../reduxx/index";
import { addItem } from "../../reduxx/cartReducer";

interface ProductsCardProps {
  img: string;
  title: string;
  price: number;
  // eslint-disable-next-line react/no-unused-prop-types
  id: number;
  // eslint-disable-next-line react/no-unused-prop-types
  quantity: number;
  // eslint-disable-next-line react/no-unused-prop-types
  item: any;
}

// eslint-disable-next-line react/function-component-definition
const ProductsCardHome: React.FC<ProductsCardProps> = (props) => {
  const { img, title, price } = props;

  const [isAdded, setIsAdded] = useState(false);

  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    const item = { ...props };
    dispatch(addItem(item));

    setIsAdded(true);

    setTimeout(() => {
      setIsAdded(false);
    }, 3000);
  };

  return (
    <div className="product_images">
      <figure
        className={`btn ${isAdded ? "added" : ""}`}
        onClick={handleAddToCart}
      >
        <img id="images_producthome" src={img} alt="item-img" />
      </figure>

      <h4 className="title">{title}</h4>
      <h3 className="price-1">$ {price.toLocaleString()}.00</h3>
    </div>
  );
};

export default ProductsCardHome;

import React from "react";
import "./CheckoutProduct.css";
function CheckoutProduct({ id, title, image, price, rating }) {
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__img" src={image} alt="product"></img>
      <div className="checkoutProduct__details">
        <p>{title}</p>
        <p>{price}</p>
        {Array(rating).fill("⭐")}
      </div>
    </div>
  );
}

export default CheckoutProduct;

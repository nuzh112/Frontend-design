import React, { useState } from "react";
import "./styles.css";

const jsonData = {
  data: [
    {
      id: 1,
      name: "Cosmetics",
      productList: [
        {
          id: 101,
          name: "Hair Oil",
          price: 122,
        },
        {
          id: 102,
          name: "Face wash",
          price: 123,
        },
      ],
    },
    {
      id: 2,
      name: "Household",
      productList: [
        {
          id: 201,
          name: "Dish Soap",
          price: 50,
        },
        {
          id: 202,
          name: "Laundry Detergent",
          price: 75,
        },
      ],
    },
  ],
};

const ProductPage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (productId) => {
    const productToAdd = jsonData.data
      .flatMap((category) => category.productList)
      .find((product) => product.id === productId);
    setCart([...cart, productToAdd]);
    console.log("Product Added to the cart.");
    console.log("List of products present in cart array:", cart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    console.log("Product removed from the cart.");
    console.log("List of products present in cart array:", updatedCart);
  };

  return (
    <div>
      {jsonData.data.map((category) => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          <div className="product-list">
            {category.productList.map((product) => (
              <div key={product.id} className="product-box">
                <p>{product.name}</p>
                <p>Price: ${product.price}</p>
                <button onClick={() => addToCart(product.id)}>
                  Add to Cart
                </button>
                <button onClick={() => removeFromCart(product.id)}>
                  Remove from Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
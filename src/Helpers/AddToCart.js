import React, { useState } from "react";
import { Product } from "../Components/Shop/Product";
import ShoppingCart from "../Pages/ShoppingCart";

export default function AddToCart(props, product) {
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = () => {
        setCartItems([...cartItems, props.data]);
    };
    return (
        <div>
            <Product data={product} addItemToCart={addItemToCart} />
            <ShoppingCart cartItems={cartItems} />
        </div>
    );
}

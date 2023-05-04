import React, { useState } from "react";
import { Product } from "../Components/Shop/Product";
import { Products } from "../Components/Products/Products";

export default function ShoppingCart({ cartItems }) {
    const cartItemsProducts = Products.filter((product) => {
        return product.cartItems;
    });
    return (
        <div className="shoppingCart">
            <h2>Shopping Cart</h2>

            <ul>
                {cartItemsProducts.map((product) => (
                    <li>
                        <Product data={product} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

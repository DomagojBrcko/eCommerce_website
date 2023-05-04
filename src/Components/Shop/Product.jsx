import React from "react";
import newIcon from "./../../Assets/Icons/new.png";
import saleIcon from "./../../Assets/Icons/discount.png";
import { useState } from "react";

export const Product = (props) => {
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = () => {
        setCartItems([...cartItems, props.data]);
    };

     console.log(cartItems);

    if (!props.data || !props.data.id) {
        return <div>Invalid product data</div>;
    }

    const { productName, price, productImage } = props.data;
    return (
        <>
            <div className="product">
                <img src={productImage} alt="shoe"></img>
                <div className="productDescription">
                    <p>{productName}</p>
                    <p>${price}</p>
                    <button onClick={addItemToCart}>Add to cart</button>
                    {props.data.id === 1 || props.data.id === 2 ? (
                        <img src={newIcon} alt="new" className="icon"></img>
                    ) : null}
                    {props.data.id === 5 || props.data.id === 9 ? (
                        <img src={saleIcon} alt="sale" className="icon"></img>
                    ) : null}
                </div>
            </div>
        </>
    );
};

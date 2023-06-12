import React, { useContext } from "react";
import newIcon from "./../../Assets/Icons/new.png";
import saleIcon from "./../../Assets/Icons/discount.png";
import { ShopContext } from "../../Context/ShopContext";

export const Product = (props) => {
    const { addItemToCart, cartItems } = useContext(ShopContext);
    const { id, productName, price, productImage } = props.data;
    if (!props.data) {
        return <div>Invalid product data</div>;
    }
    const cartItemsAmount = cartItems[id];

    return (
        <>
            <div className="product">
                <img src={productImage} alt="shoe"></img>
                <div className="productDescription">
                    <p>{productName}</p>
                    <p>${price}</p>
                    <div className="buttonContainer">
                        <button onClick={() => addItemToCart(id)}>
                            Add to cart
                            {cartItemsAmount > 0 && <>({cartItemsAmount})</>}
                        </button>
                    </div>
                    {id === 1 || id === 2 ? (
                        <img src={newIcon} alt="new" className="icon"></img>
                    ) : null}
                    {id === 5 || id === 9 ? (
                        <img src={saleIcon} alt="sale" className="icon"></img>
                    ) : null}
                </div>
            </div>
        </>
    );
};

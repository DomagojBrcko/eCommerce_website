import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;

    const {
        removeItemFromCart,
        cartItems,
        updateCartItemCount,
        addItemToCart,
    } = useContext(ShopContext);

    return (
        // <StyledCartItem>
        <div className="product">
            <img src={productImage} alt="shoe"></img>
            <div className="productDescriptionAndAmount">
                <div className="productDescription">
                    <p>{productName}</p>
                    <p>${price}</p>
                </div>
                <div className="buttonContainer">
                    <button
                        onClick={() => removeItemFromCart(id)}
                        className="addAndRemoveItem"
                    >
                        -
                    </button>

                    <input
                        value={cartItems[id]}
                        onChange={(e) =>
                            updateCartItemCount(Number(e.target.value), id)
                        }
                        className="inputField"
                    />
                    <button
                        onClick={() => addItemToCart(id)}
                        className="addAndRemoveItem"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
        // </StyledCartItem>
    );
};
export default CartItem;

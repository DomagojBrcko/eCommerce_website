import React from "react";
import { Products } from "../Components/Products/Products";
import CartItem from "../Components/CartItem/CartItem";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useNavigate } from "react-router-dom";
import { StyledCartItem } from "../Components/CartItem/CartItem.styled";
import { StyledShoppingCart } from "../Helpers/ShoppingCart.styled";

export const ShoppingCart = () => {
    const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();

    return (
        <StyledShoppingCart>
            <h1>Your cart items</h1>
            <StyledCartItem>
                {Products.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />;
                    }
                    return null;
                })}
            </StyledCartItem>
            {totalAmount > 0 ? (
                <div className="checkout">
                    <p>
                        Subtotal: <b> ${totalAmount}</b>
                    </p>
                </div>
            ) : (
                <h1> Your Shopping Cart is Empty</h1>
            )}
            <div className="checkout">
                <button onClick={() => navigate("/")}>Continue Shopping</button>
                <button
                    onClick={() => {
                        checkout();
                        navigate("/checkout");
                    }}
                >
                    Checkout
                </button>
            </div>
        </StyledShoppingCart>
    );
};

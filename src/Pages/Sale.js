import React from "react";
import { Products } from "../Components/Products/Products";
import { StyledShop } from "../Components/Shop/Shop.styled";
import { Product } from "../Components/Shop/Product";

export const Sale = (props) => {
    const saleProducts = Products.filter((product) => {
        return product.id === 5 || product.id === 9;
    });
    return (
        <StyledShop>
            {saleProducts.map((product) => (
                <Product data={product} />
            ))}
        </StyledShop>
    );
};

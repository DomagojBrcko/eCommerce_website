import React from "react";
import { Products } from "../Components/Products/Products";
import { StyledShop } from "../Components/Shop/Shop.styled";
import { Product } from "../Components/Shop/Product";

export const New = () => {
    const newProducts = Products.filter((product) => {
        return product.id === 1 || product.id === 2;
    });
    return (
        <StyledShop>
            {newProducts.map((product) => (
                <Product data={product} />
            ))}
        </StyledShop>
    );
};

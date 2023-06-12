import React from "react";
import { StyledShop } from "../Components/Shop/Shop.styled";
import { Products } from "../Components/Products/Products";
import { Product } from "../Components/Shop/Product";

export const Women = () => {
    const womenProducts = Products.filter((product) => {
        return product.classification === "Women";
    });
    return (
        <StyledShop>
            {womenProducts.map((product) => (
                <Product data={product} />
            ))}
        </StyledShop>
    );
};

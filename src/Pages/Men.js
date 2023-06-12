import React from "react";
import { StyledShop } from "../Components/Shop/Shop.styled";
import { Product } from "../Components/Shop/Product";
import { Products } from "./../Components/Products/Products";

export const Men = (props) => {
    const menProducts = Products.filter((product) => {
        return product.classification === "Men";
    });
    return (
        <StyledShop>
            {menProducts.map((product) => (
                <Product data={product} />
            ))}
        </StyledShop>
    );
};

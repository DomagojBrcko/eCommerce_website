import React from "react";
import { Products } from "../Components/Products/Products";
import { StyledShop } from "../Components/Shop/Shop.styled";
import { Product } from "../Components/Shop/Product";

export default function Sale(props) {
    const saleProducts = Products.filter((product) => {
        return product.id === 1 || product.id === 2;
    });
    return (
        <StyledShop>
            {saleProducts.map((product) => (
                <Product data={product} />
            ))}
        </StyledShop>
    );
}

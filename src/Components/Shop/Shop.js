import React from "react";
import { Products } from "../Products/Products";
import { Product } from "./Product";
import { StyledShop } from "./Shop.styled";

export default function Shop() {
    return (
        <StyledShop>
            {Products.map((product) => (
                <Product data={product} />
            ))}
        </StyledShop>
    );
}

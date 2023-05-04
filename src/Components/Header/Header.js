import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { StyledHeader } from "./Header.styled";

export default function Header() {
    return (
        <StyledHeader>
            <a href="/">
                <h1>WEB shop</h1>
            </a>

            <nav className="navBar">
                <a href="/New">New!</a>
                <a href="/Men">Men</a>
                <a href="/Women">Women</a>
                <a href="/Sale">Sale!</a>
                <a href="/ShoppingCart">
                    <FontAwesomeIcon icon={faCartShopping} />
                </a>
            </nav>
        </StyledHeader>
    );
}

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { StyledHeader } from "./Header.styled";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <StyledHeader>
            <h1>
                <a href="/">WEB shop</a>
            </h1>

            <nav className="navBar">
                <Link to="/New">New!</Link>
                <Link to="/Men">Men</Link>
                <Link to="/Women">Women</Link>
                <Link to="/Sale">Sale!</Link>
                <Link to="/ShoppingCart">
                    <FontAwesomeIcon icon={faCartShopping} />
                </Link>
            </nav>
        </StyledHeader>
    );
}

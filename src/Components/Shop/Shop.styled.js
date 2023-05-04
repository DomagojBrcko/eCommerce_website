import styled from "styled-components";

export const StyledShop = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-content: center;
    max-width: 100%;
    height: 100%;
    flex-wrap: wrap;

    .product {
        max-width: 20%;
        margin-bottom: 30px;
        border-radius: 15px;
        box-shadow: 3px 3px 5px rgb(219, 187, 187);
        margin: 0 5% 5% 5%;
    }

    .product p {
        padding-left: 5px;
        padding-top: 5px;
        margin: 0;
        z-index: 9;
        position: relative;
    }

    .product img {
        width: 100%;
        border-radius: 15px 15px 0 0;
        height: 80%;
    }

    .product img:hover {
        transform: scale(105%);
        transition: 0.5s ease-in-out;
        border-radius: 15px;
    }

    .icon {
        max-width: 25px;
        max-height: 25px;
        position: absolute;
        left: 90%;
    }

    button {
        border: 1px solid rgb(219, 187, 187);
        border-radius: 15px;
        max-width: 40%;
        margin-top: 5px;
    }
    button:hover {
        background-color: white;
    }

    .productDescription {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        max-width: initial;
    }
`;

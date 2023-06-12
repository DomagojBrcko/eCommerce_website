import styled from "styled-components";

export const StyledShoppingCart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .checkout {
        display: flex;
        justify-content: center;
    }
    .checkout > button,
    p {
        margin: 20px;
    }
    .checkout > button {
        border: 1px solid black;
        border-radius: 5px;
    }
    .checkout > button:hover {
        background-color: white;
        color: lightcoral;
    }

    @media (max-width: 1024px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        .product {
            max-width: 40%;
            margin: 20px;
        }
        button {
            max-width: 80%;
            padding: 10px 10px;
            margin: 0 auto 10px;
        }
    }
    @media (max-width: 464px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        .product {
            max-width: 80%;
            margin: 20px 0;
        }
        button {
            max-width: 80%;
            padding: 10px 10px;
            margin: 0 auto 10px;
        }
    }
`;

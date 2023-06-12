import styled from "styled-components";

export const StyledCartItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    max-width: 100%;
    flex-wrap: wrap;
    margin-top: 10%;
    margin-bottom: 10%;

    .product {
        max-width: 500px;
        height: 300px;
        border-radius: 15px;
        box-shadow: 3px 3px 5px 1px rgb(219, 187, 187);
        position: relative;
        display: flex;
        flex-direction: row;
        margin: 50px;
    }

    .product p {
        padding-left: 5px;
        padding-top: 5px;
        margin-left: 10%;
        z-index: 9;
        position: relative;
        font-size: 1.5em;
    }

    .product img {
        width: 200px;
        border-radius: 15px;
        height: 300px;
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
        bottom: 80px;
    }

    .buttonContainer {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button {
        border: 1px solid rgb(219, 187, 187);
        border-radius: 15px;
        margin-top: 5px;
    }
    button:hover {
        background-color: white;
    }

    .addAndRemoveItem {
        margin: 0;
        width: 20px;
    }

    .productDescription {
        max-width: 100%;
    }
    .productDescriptionAndAmount {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .inputField {
        width: 30%;
        height: 80%;
        border: 1px solid rgb(219, 187, 187);
        border-radius: 5px;
        text-align: center;
        appearance: none;
    }

    @media (max-width: 1024px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        .product {
            max-width: 100%;
            margin: 20px;
            display: flex;
            flex-direction: column;
            height: 100%;
        }
        .product > img {
            width: 100%;
        }
        button {
            max-width: 80%;
            padding: 10px 10px;
            margin: 0 auto 10px;
        }
        .addAndRemoveItem {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: white;
            max-height: 25px;
            margin: 5px;
        }
    }
    @media (max-width: 464px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        .product {
            max-width: 100%;
            margin: 20px 0;
        }
        .product > img {
            width: 100%;
        }
        button {
            max-width: 80%;
            padding: 10px 10px;
            margin: 0 auto 10px;
        }

        .addAndRemoveItem {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: white;
            max-height: 25px;
            margin: 5px;
        }
    }
`;

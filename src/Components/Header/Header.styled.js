import styled from "styled-components";

export const StyledHeader = styled.header`
    position: fixed;
    background-color: white;
    width: 100%;
    z-index: 10;

    .navBar {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        box-shadow: 3px 5px rgb(176, 153, 153);
    }
    a {
        text-decoration: none;
        color: black;
    }

    a:hover {
        color: red;
        transform: scale(1.2);
        transition-duration: 0.5s;
    }
`;

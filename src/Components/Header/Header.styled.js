import styled from "styled-components";

export const StyledHeader = styled.header`
    position: fixed;
    background-color: white;
    width: 100%;
    z-index: 1001;
    @media (max-width: 464px) {
        margin-bottom: 30px;
        z-index: 0;
        position: relative;
    }

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
    h1 > a {
        font-size: 2rem;
    }
`;

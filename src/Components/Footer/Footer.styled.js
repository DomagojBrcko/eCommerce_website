import styled from "styled-components";

export const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: end;
    background-color: rgb(219, 187, 187);
    color: rgb(130, 113, 113);
    height: 20vh;
    position: relative;
    @media (max-width: 464px) {
        width: 100%;
        display: block;
        h1 {
            position: absolute;
            bottom: 0;
        }
    }
`;

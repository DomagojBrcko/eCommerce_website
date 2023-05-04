import styled from "styled-components";

export const StyledClothingStrip = styled.div`
    /* padding-top: 20vh; */
    display: flex;
    max-height: 30vh;
    flex-direction: row;
    flex-flow: nowrap;
    overflow: hidden;
    padding-right: 2vw;
    padding-bottom: 10%;

    .stripPicture {
        width: 30vw;
        margin: 10px;
        border: 1px solid white;
        border-radius: 10px;
        box-shadow: 3px 3px 5px rgb(219, 187, 187);
    }

    .center {
        /* display: flex;
        justify-content: center;
        align-items: center; */
        position: absolute;
        text-align: center;
        top: 10%;
        left: 50%;
        padding: 5% 0;
    }
    * {
        margin: 0;
        text-decoration: none;
    }
`;

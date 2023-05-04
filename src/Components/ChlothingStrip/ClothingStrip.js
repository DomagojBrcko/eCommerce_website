import React from "react";
import log from "./../../Assets/Caurosel/log.jpg";
import train from "./../../Assets/Caurosel/train.jpg";
import wakeboard from "./../../Assets/Caurosel/wakeboard.jpg";
import nike from "./../../Assets/Caurosel/nike.jpg";
import skateboard from "./../../Assets/Caurosel/skateboard.jpg";
import { StyledClothingStrip } from "./ClothingStrip.styled";

export default function ClothingStrip() {
    return (
        <StyledClothingStrip>
            <img alt="shoes" src={log} className="stripPicture" />
            <img alt="shoes" src={train} className="stripPicture" />
            <img alt="shoes" src={wakeboard} className="stripPicture" />
            <img alt="shoes" src={nike} className="stripPicture" />
            <img alt="shoes" src={skateboard} className="stripPicture" />
        </StyledClothingStrip>
    );
}

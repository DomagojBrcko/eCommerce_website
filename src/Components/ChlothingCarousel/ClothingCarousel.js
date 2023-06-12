import React from "react";
import log from "./../../Assets/Caurosel/log.jpg";
import train from "./../../Assets/Caurosel/train.jpg";
import wakeboard from "./../../Assets/Caurosel/wakeboard.jpg";
import nike from "./../../Assets/Caurosel/nike.jpg";
import skateboard from "./../../Assets/Caurosel/skateboard.jpg";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ClothingCarousel.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
    },
};

const CarouselImage = styled.img`
    width: 500px;
    height: 300px;
    margin: 0;
    background-color: white;
`;

export default function ClothingCarousel(props) {
    return (
        <Carousel
            swipeable={true}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={2500}
            keyBoardControl={true}
            transitionDuration={1000}
            containerClass="carouselContainer"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            rewind={false}
        >
            <CarouselImage src={log} alt="log" />
            <CarouselImage src={train} alt="log" />
            <CarouselImage src={skateboard} alt="log" />
            <CarouselImage src={nike} alt="log" />
            <CarouselImage src={wakeboard} alt="log" />
        </Carousel>
    );
}

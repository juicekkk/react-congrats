import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styled from 'styled-components';

const Carousel = () => {
    const Container = styled.div`
        width: 100%;
        max-width: 640px;
        height: 18vh;
        margin: 0 auto;
    `;

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
    };
    return(
        <Container>
            <Slider {...settings}>
                {/* WaitingCard는 그냥 예시일 뿐이므로, 서버에서 배너(이미지)를 배열로 담아주면, map으로 뿌리기 */}
                <img src='https://dummyimage.com/364x278/ffc6e5/fff' />
                <img src='https://dummyimage.com/364x278/ffc103/fff' />
                <img src='https://dummyimage.com/364x278/74a2d6/fff' />
                <img src='https://dummyimage.com/364x278/ff5397/fff' />
            </Slider>
        </Container>
    );
};

export default Carousel;
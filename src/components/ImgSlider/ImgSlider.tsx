import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// slider images
import img1 from "assets/images/slider-badag.jpg";
import img2 from "assets/images/slider-badging.jpg";
import img3 from "assets/images/slider-scale.jpg";
import img4 from "assets/images/slider-scales.jpg";

const Carousel = styled(Slider)`
  margin-top: 20px;

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button::before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }
`;
const Wrap = styled.div`
  cursor: pointer;
  img {
    border: 4px solid transparent;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;

function ImgSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src={img1} alt="" />
      </Wrap>
      <Wrap>
        <img src={img2} alt="" />
      </Wrap>
      <Wrap>
        <img src={img3} alt="" />
      </Wrap>
      <Wrap>
        <img src={img4} alt="" />
      </Wrap>
    </Carousel>
  );
}

export default ImgSlider;

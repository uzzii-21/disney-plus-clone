import styled from "styled-components";

// images
import img1 from "assets/images/viewers-disney.png";
import img2 from "assets/images/viewers-marvel.png";
import img3 from "assets/images/viewers-starwars.png";
import img4 from "assets/images/viewers-pixar.png";
import img5 from "assets/images/viewers-national.png";
// vidoes
import video1 from "assets/videos/1564674844-disney.mp4";
import video2 from "assets/videos/1564676115-marvel.mp4";
import video3 from "assets/videos/1608229455-star-wars.mp4";
import video4 from "assets/videos/1564676714-pixar.mp4";
import video5 from "assets/videos/1564676296-national-geographic.mp4";

const Container = styled.section`
  margin-top: 30px;
  padding: 30px 0 26px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(6, minmax(0, 1fr));

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin-top: 0px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid rgba(249, 249, 249, 0.1);


  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

    video{
    opacity: 1;

    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    opacity: 0;
    z-index: -1;
    object-fit: cover;
}
  }
`;

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src={img1} alt="" />
        <video src={video1} autoPlay loop />
      </Wrap>
      <Wrap>
        <img src={img2} alt="" />
        <video src={video2} autoPlay loop />
      </Wrap>
      <Wrap>
        <img src={img3} alt="" />
        <video src={video3} autoPlay loop />
      </Wrap>
      <Wrap>
        <img src={img4} alt="" />
        <video src={video4} autoPlay loop />
      </Wrap>
      <Wrap>
        <img src={img5} alt="" />
        <video src={video5} autoPlay loop />
      </Wrap>
      <Wrap>
        <img src={img2} alt="" />
        <video src={video2} autoPlay loop />
      </Wrap>
    </Container>
  );
}

export default Viewers;

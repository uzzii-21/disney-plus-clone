import styled from "styled-components";
import homeBg from "assets/images/home-background.png";
import { ImgSlider, Viewers } from "components";

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url("${homeBg}") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    min-height: calc(100vh - 70px);
    width: 100vw;
    z-index: -1;
  }
`;

function Home() {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
    </Container>
  );
}

export default Home;

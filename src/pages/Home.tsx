import styled from "styled-components";
import homeBg from "assets/images/home-background.png";
import { ImgSlider, Viewers } from "components";
import Movies from "components/Movies/Movies";
import { moviesData } from "../db";

const Container = styled.main`
  padding: 70px calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url("${homeBg}") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

function Home() {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies movieList={moviesData.recommended} title="Recommended For You" />
      <Movies movieList={moviesData.new} title="New to Disney+" />
      <Movies movieList={moviesData.originals} title="Originals" />
      <Movies movieList={moviesData.trending} title="Trending" />
    </Container>
  );
}

export default Home;

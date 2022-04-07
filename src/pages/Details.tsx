import styled from "styled-components";
import playIcon from "assets/images/play-icon-black.png";
import playIconWhite from "assets/images/play-icon-white.png";
import addIcon from "assets/images/add.svg";
import groupIcon from "assets/images/group-icon.png";
import { useLocation } from "react-router-dom";
import { MovieProp } from "db";

const Container = styled.main`
  padding: calc(3.5vw + 5px);
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0.8;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  margin-bottom: 30px;
  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;
const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rbg(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }
  span {
    color: black;
  }
  img {
    width: 32px;
    @media (max-width: 768px) {
      width: 25px;
    }
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);

  span {
    color: white;
  }
`;
const AddButton = styled.button`
  margin-right: 16px;

  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.6);
  img {
    margin: 7px;
  }
`;
const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;

const SubTitle = styled.h1`
  font-size: 22px;
  color: rgb(249, 249, 249);
  margin-top: 26px;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 18px;
  }
`;
const Description = styled.p`
  line-height: 1.5;
  font-size: 20px;
  margin-top: 16px;
  max-width: 874px;
  color: rgb(249, 249, 249);
  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
  }
`;

function Details() {
  const {
    state: { movieDetails },
  } = useLocation();

  return (
    <Container>
      <Background>
        <img src={movieDetails.background} alt={movieDetails.slug} />
      </Background>
      <ImageTitle>
        <img src={movieDetails.titleImg} alt={movieDetails.slug} />
      </ImageTitle>

      <Controls>
        <PlayButton>
          <img src={playIcon} alt="playIcon" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src={playIconWhite} alt="playIconWhite" />
          <span>TRAILER</span>
        </TrailerButton>

        <AddButton>
          <img src={addIcon} alt="addIcon" />
        </AddButton>
        <GroupWatchButton>
          <img src={groupIcon} alt="groupIcon" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>{movieDetails.subTitle}</SubTitle>
      <Description>{movieDetails.description}</Description>
    </Container>
  );
}

export default Details;

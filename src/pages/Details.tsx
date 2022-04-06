import styled from "styled-components";
import playIcon from "assets/images/play-icon-black.png";
import playIconWhite from "assets/images/play-icon-white.png";
import addIcon from "assets/images/add.svg";
import groupIcon from "assets/images/group-icon.png";

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
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
    object-fill: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fill: contain;
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

  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
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
  font-size: 16px;
  color: rgb(249, 249, 249);
  margin-top: 26px;
`;
const Description = styled.p`
  line-height: 1.5;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
`;

function Details() {
  return (
    <Container>
      <Background>
        <img src="" alt="" />
      </Background>
      <ImageTitle>
        <img src="" alt="" />
      </ImageTitle>

      <Controls>
        <PlayButton>
          <img src={playIcon} alt="" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src={playIconWhite} alt="" />
          <span>TRAILER</span>
        </TrailerButton>

        <AddButton>
          <img src={addIcon} alt="" />
        </AddButton>
        <GroupWatchButton>
          <img src={groupIcon} alt="" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>2015 • 1h 35m • Coming of Age, Family, Animation</SubTitle>
      <Description>
        When 11-year-old Riley moves to a new city, her Emotions team up to help
        her through the transition. Joy, Fear, Anger, Disgust and Sadness work
        together, but when Joy and Sadness get lost, they must journey through
        unfamiliar places to get back home.
      </Description>
    </Container>
  );
}

export default Details;

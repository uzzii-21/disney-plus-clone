import styled from "styled-components";
import homeBg from "assets/images/login.jpg";
import homeBgSm from "assets/images/sm-login.jpg";

import logo from "assets/images/logo.svg";

const Container = styled.main`
  position: relative;
  min-height: 100vh;
  padding: 5.6vw;
  display: flex;
  align-items: center;

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

  @media (max-width: 768px) {
    background: url("${homeBgSm}") center center / cover no-repeat fixed;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

const Wrap = styled.section`
  max-width: 640px;
  img {
    max-width: 180px;
    margin-bottom: 2vw;
  }
  h1 {
    font-size: 44px;
    line-height: 1.2;
    letter-spacing: normal;
    margin-bottom: 30px;
    font-weight: 500;
    font-style: normal;
  }
  p {
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 26px;
  }
  button {
    height: 60px;
    padding: 16.5px 24px;
    width: 50%;
    color: #f9f9f9;
    background: #0063e5;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    line-height: 18px;
    font-weight: 400;
    letter-spacing: 1px;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 32px;
    }
    button {
      width: 100%;
    }
  }
`;

function LogIn() {
  return (
    <Container>
      <Wrap>
        <img src={logo} alt="Logo" />
        <h1>Everything you love + never would've expected</h1>
        <p>Login required.</p>
        <button>LOG IN NOW</button>
      </Wrap>
    </Container>
  );
}

export default LogIn;

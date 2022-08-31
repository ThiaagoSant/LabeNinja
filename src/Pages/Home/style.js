import styled from "styled-components";

export const Main = styled.main`
  position: relative;

  img {
    height: calc(100vh - 80px);
    position: absolute;
    width: 100%;
    z-index: -1;
    object-fit: cover;
  }

  div {
    align-items: center;
    display: flex;
    height: 500px;
    flex-direction: column;
    justify-content: center;

    p {
      color: #fff;
      font-family: Geneva, Verdana, sans-serif;
      font-size: 2rem;
      padding: 0 2%;
      text-align: center;
    }
  }
`;

export const ContainerButton = styled.main`
  align-items: center;
  column-gap: 30px;
  display: flex;
  justify-content: center;
  margin-top: 60px;
  width: 100%;

  a {
    border-radius: 3px;
    font-weight: 700;
    padding: 22px;
    padding-left: 60px;
    padding-right: 60px;

    button {
      color: #fff;
      font-size: 1.2rem;
      font-weight: 300;
      background: transparent;
    }
  }

  a:nth-of-type(1) {
    cursor: pointer;
    background: #00adef;
  }

  a:nth-of-type(2) {
    cursor: pointer;
    background: transparent;
    border: 2px solid #fff;
  }
`;

import styled from "styled-components";

export const HeaderHome = styled.header`
  height: 70px;
  width: 100%;
  background-color: #313640;
  padding: 0 4%;

  nav {
    display: flex;
    height: inherit;
    align-items: center;
    justify-content: space-between;
  }

  h1 a {
    color: white;
    font-family: Helvetica, sans-serif;
  }

  button {
    background: #00adef;
    padding: 12px 28px;
    border-radius: 8px;

    a {
      color: white;
    }
  }
`;
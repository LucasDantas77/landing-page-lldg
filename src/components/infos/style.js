import styled from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  gap: 28px;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #2c2a2a;
  height: 40%;

  h1 {
    font-size: 40px;
    background-color: #2c2a2a;
    margin-top: 20px;
    display: flex;
    gap: 10px;
  }
  p {
    color: blue;
    background-color: #2c2a2a;
  }

  h3 {
    width: 90%;
    margin: 0 auto;
    background-color: #2c2a2a;
    font-size: 18px;
    font-weight: 100;
    color: #fff;
    max-width: 700px;
    line-height: 1.8;
  }
  div {
    background-color: #2c2a2a;
    overflow-y: scroll;
    width: 100%;
    @media (min-width: 768px) {
      overflow: hidden;
    }
  }

  @media (min-width: 768px) {
    height: 550px;
  }
`;

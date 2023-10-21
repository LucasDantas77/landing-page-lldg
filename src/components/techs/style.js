import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 250px;

  h2 {
    width: 90%;
    max-width: 400px;
    margin: 0 auto;
    font-size: 20px;
    margin-top: 20px;
    font-weight: 100;
  }
`;

export const UlTech = styled.ul`
  width: 70%;
  display: flex;
  gap: 8px;
  flex-direction: row;
  overflow-x: scroll;
  margin-left: 10px;

  li {
    width: 100%;
  }

  img {
    width: 35px;

    @media (min-width: 768px) {
      width: 80px;
      height: 70px;
    }
  }

  @media (min-width: 768px) {
    margin: 0 auto;
    margin-top: 20px;
    overflow: hidden;
  }
`;

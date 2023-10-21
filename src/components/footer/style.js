import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  span {
    font-size: 12px;
    color: gray;
    margin-bottom: 10px;
  }
`;

export const DivContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
  align-items: center;
  height: 100%;
  img {
    max-width: 100px;
    width: 30%;
  }

  @media (min-width: 768px) {
    gap: 900px;
  }
`;

export const DivNames = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 15px;
    color: gray;
  }

  p {
    font-size: 12px;
    color: gray;
  }
`;

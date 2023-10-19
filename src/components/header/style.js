import styled from "styled-components";

export const HeaderSty = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  width: 100%;
  height: 600px;
  background-color: #000;
  border-bottom: 2px solid #fff;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  img {
    width: 80%;
  }
`;

export const DivHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  h3 {
    width: 90%;
    font-size: 2rem;
    margin-left: 10px;
    font-weight: 600;
  }

  span {
    color: blue;
  }
  p {
    color: #868e96;
    font-size: 17px;
    width: 80%;
    margin-left: 10px;
  }

  @media (min-width: 768px) {
    margin-left: 30px;
  }
`;

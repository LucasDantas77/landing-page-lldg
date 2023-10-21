import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  width: 100%;
  background-color: #1c1a1a;

  div {
    background-color: #1c1a1a;
    width: 70%;
  }

  h2 {
    width: 80%;
    margin: 20px 0 0 20px;
    background-color: #1c1a1a;
  }

  span {
    color: blue;
    background-color: #1c1a1a;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    h2 {
      margin: 300px 0 0 50px;
    }
  }
`;

export const UlContacts = styled.ul`
  display: flex;
  gap: 10px;
  flex-direction: column;
  background-color: #1c1a1a;
  margin-bottom: 30px;

  li {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    background-color: #1c1a1a;
  }

  h3 {
    font-size: 20px;
    background-color: #1c1a1a;
    margin-left: 10px;
  }

  p {
    width: 80%;
    background-color: #1c1a1a;
    color: gray;
    font-size: 15px;
    margin-left: 10px;
  }

  img {
    width: 20%;
    max-width: 80px;
    background-color: #1c1a1a;
  }
  a {
    background-color: #1c1a1a;
    font-size: 15px;
    color: blue;
    margin-left: 10px;
  }

  @media (min-width: 768px) {
    margin-top: 50px;
  }
`;

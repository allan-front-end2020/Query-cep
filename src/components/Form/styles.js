import styled from "styled-components";

export const Container = styled.main`
  width: 400px;
  height: 200px;
  padding: 20px;
  display: grid;
  grid-template-columns: 30% 70%;
  @media (max-width: 460px) {
    width: 300px;
    grid-template-columns: 40% 60%;
   }

  grid-template-columns: 30% 70%;
  @media (max-width: 354px) {
    width: 250px;
    grid-template-columns: 50% 50%;
   }
  div {
    display: flex;
    justify-content: start;
    align-items: center;
  }
  border-radius: 8px;
  box-shadow: 2px 2px 6px grey;
  span {
    margin: 13px 6px 19px;
    font-weight: bold;
  }
`;

export const ContainerSearch = styled.div`
  margin: 20px 0px;
  display: flex;
  justify-content: space-between;
  input {
    width: 72%;
    height: 36px;
    cursor: pointer;
    margin-right: 8px;
    border-radius: 8px;
    padding-left: 10px;
    border: 0.4px grey solid;
    font-size: 20px;
    box-shadow: 2px 2px 6px grey;
    @media (max-width: 466px) {
    width: 200px;

   }

  }
  button {
    width: 24%;
    border-radius: 8px;
    cursor: pointer;
    background-color: #fefefefe;
    border: 0.4px grey solid;
    font-size: 20px;
    font-size: bold;
    transition: 0.5s;
    box-shadow: 2px 2px 6px grey;
    @media (max-width: 466px) {
      font-size: 15px;

   }
  }
  button:hover {
    background-color: grey;
    color: white;
    box-shadow: 3px 3px 5px grey;
  }
`;

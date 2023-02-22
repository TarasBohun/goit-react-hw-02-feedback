import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Item = styled.li`
  margin-bottom: 5px;
  width: 200px;
  border: 2px solid black;
  border-radius: 5px;

  font-weight: 500;

  :nth-child(1) {
    color: #31b631;
  }

  :nth-child(2) {
    color: #00a6f9;
  }

  :nth-child(3) {
    color: #f92100;
  }

  :nth-child(5) {
    font-weight: 700;
  }
`;

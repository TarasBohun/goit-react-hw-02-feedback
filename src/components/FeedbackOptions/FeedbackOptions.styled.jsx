import styled from 'styled-components';

export const BtnList = styled.ul`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

export const BtnItem = styled.li`
  border-radius: 10px;
  :not(:last-child) {
    margin-right: 10px;
  }

  :first-child:hover {
    background-color: #31b631;
  }

  :nth-child(2):hover {
    background-color: #00a6f9;
  }

  :nth-child(3):hover {
    background-color: #f92100;
  }
`;

export const Buttons = styled.button`
  padding: 10px 20px;

  border-radius: 10px;
  font-family: inherit;
  font-weight: 600;
  text-transform: uppercase;

  background-color: inherit;
`;

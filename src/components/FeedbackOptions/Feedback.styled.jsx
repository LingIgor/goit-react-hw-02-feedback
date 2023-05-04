import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  background: #3e54b4;
  border: none;
  width: 100px;
  height: 35px;
  margin-left: 20px;
  border-radius: 15px;
  color: white;
  font-size: 17px;
  box-shadow: 5px 10px 20px 2px black;

  &:hover {
    transform: scale(1.1);
    background: rgb(33 53 140);
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  width: 350px;
  height: 1650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
`;

export const Header = styled.p`
  margin-top: 50px;
  font-size: 40px;
  font-weight: 900;
  cursor: default;
`;
export const Item = styled.button`
  margin-top: 50px;
  border: none;
  font-size: 20px;
  font-weight: 900;
  cursor: pointer;
  background: none;
`;

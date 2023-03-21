import styled from 'styled-components';

export const MenuContainer = styled.div`
  width: 28rem;
  /* height: 1650px; */
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.8rem;
  padding: 0 2rem 0 0;
  /* background-color: skyblue; */
`;

export const MenuItem = styled.button`
  width: 100%;
  height: 4.5rem;
  border: none;
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 2.5rem;
  text-align: right;
  cursor: pointer;
  background-color: #fff;
  border-radius: 0 7px 7px 0;
  padding: 0 2rem 0 0;
  line-height: 4.5rem;
  color: #4b4b4b;
  &.active {
    color: #fff;
    background-color: var(--main-color);
  }
`;

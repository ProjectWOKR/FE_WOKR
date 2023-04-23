import styled from 'styled-components';

export const MenuContainer = styled.div`
  width: 28.3rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: sticky;
  top: 20px;
`;

export const MenuItem = styled.button`
  width: 100%;
  height: 4.5rem;
  border: none;
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 2.4rem;
  text-align: right;
  cursor: pointer;
  background-color: #fff;
  border-radius: 0 7px 7px 0;
  padding: 0 2rem 0 0;
  line-height: 4.5rem;
  color: ${({ text }) =>
    `${
      text === 'All OKR'
        ? '#DEDEDE'
        : text === 'Team OKR'
        ? '#DEDEDE'
        : text === 'Calendar'
        ? '#DEDEDE'
        : '#4b4b4b'
    }`};
  &.active {
    color: #fff;
    background-color: var(--main-color);
  }
  &:hover {
    background-color: var(--main-color);
    color: white;
  }
`;
// #DEDEDE
// #4b4b4b;

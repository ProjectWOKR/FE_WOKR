import styled from 'styled-components';

export const StWrapBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--main-gray);
  border-radius: 35px 35px 0 0;
  padding: 0 20px;
  box-sizing: border-box;
`;

export const StWrap = styled.div`
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
  height: auto;
  display: flex;
  padding-top: 30px;
  main {
    width: 100%;
  }
`;

export const OkrContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

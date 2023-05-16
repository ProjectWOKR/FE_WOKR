import styled from 'styled-components';

export const StWrapBackground = styled.div`
  /* max-width: 1500px; */
  max-width: 90%;
  min-width: 1350px;
  min-height: 500px;
  height: 100%;
  background-color: var(--main-gray);
  border-radius: 30px;
  padding: 0 20px 20px 20px;
  box-sizing: border-box;
  margin: 0 auto;
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
  gap: 2.5rem;
`;

import styled from 'styled-components';

export const StWrap = styled.div`
  width: 100%;
  height: auto;
  /* background-color: pink; */
  display: flex;
  aside {
    width: 28rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 3.8rem;
    margin-top: 1.8rem;

    position: sticky;
    top: 20px;
  }
  main {
    width: 100%;
    max-width: 147rem;
  }
`;

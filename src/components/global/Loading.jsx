import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import FadeLoader from 'react-spinners/FadeLoader';
import styled from 'styled-components';

const Loading = () => {
  return (
    <StLoadingBox>
      {/* <FadeLoader color='skyblue' height={15} width={5} radius={2} margin={2} /> */}
      <FaSpinner />
    </StLoadingBox>
  );
};

export default Loading;

const StLoadingBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100vh;
  margin: 0 auto;
  svg {
    width: 40px;
    height: 40px;
    animation: spin 2s linear infinite;

    path {
      color: rgb(255, 131, 54);
    }
  }
  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

import React from 'react';
import styled from 'styled-components';

const GlobalLayout = ({ children }) => {
  return <StGlobalLayout>{children}</StGlobalLayout>;
};

export default GlobalLayout;

const StGlobalLayout = styled.div`
  width: 100%;
`;

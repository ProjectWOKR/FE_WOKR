import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './components/global/GlobalStyle';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import theme from './components/global/theme';
import ReactGA4 from 'react-ga4';
import Router from './router/Router';
import RouteChangeTracker from './router/RouteChangeTracker';

const queryClient = new QueryClient();

ReactGA4.initialize(`${process.env.REACT_APP_GOOGLE_ANALYTICS_ID}`);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <QueryClientProvider client={queryClient}>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <BrowserRouter>
          <RouteChangeTracker />
          <Router />
        </BrowserRouter>
      </RecoilRoot>
    </ThemeProvider>
  </QueryClientProvider>
);

import GlobalStyle from './components/global/GlobalStyle';
import theme from './components/global/theme';
import { RouteChangeTracker } from './router/RouteChangeTracker';
import Router from './router/Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA4 from 'react-ga4';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

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

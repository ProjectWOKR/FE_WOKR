import Router from './router/Router';
import RouteChangeTracker from './router/RouteChangeTracker';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
function App() {
  const gaTrackingId = process.env.REACT_APP_GA_TRACKING_ID;
  ReactGA.initialize(gaTrackingId);

  const history = createBrowserHistory();
  history.listen(response => {
    console.log(response.location.pathname);
    ReactGA.set({ page: response.location.pathname });
    ReactGA.pageview(response.location.pathname);
  });
  RouteChangeTracker();
  return <Router />;
}

export default App;

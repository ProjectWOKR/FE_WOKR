import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
const RouteChangeTracker = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);
  const gaTrackingId = process.env.GOOGLE_ANALYTICS_TARCKING_ID;
  ReactGA.initialize(gaTrackingId);

  const history = createBrowserHistory();
  history.listen(response => {
    console.log(response.location.pathname);
    ReactGA.set({ page: response.location.pathname });
    ReactGA.pageview(response.location.pathname);
  });

  useEffect(() => {
    if (!window.location.href.includes('localhost')) {
      // 환경 변수 사용
      ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID);
    }
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      ReactGA.pageview(location.pathname + location.search);
    }
  }, [initialized, location]);
};

export default RouteChangeTracker;

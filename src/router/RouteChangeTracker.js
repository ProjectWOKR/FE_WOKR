import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const RouteChangeTracker = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  // 프로덕션 환경에서만 Google Analytics 이벤트 추적
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize(`${process.env.REACT_APP_GOOGLE_ANALYTICS_ID}`);
      setInitialized(true);
    }
  }, []);

  // location 변경 감지시 pageview 이벤트 전송
  useEffect(() => {
    if (initialized) {
      ReactGA.set({ page: location.pathname });
      ReactGA.send('pageview');
    }
  }, [initialized, location]);

  return null;
};

export default RouteChangeTracker;

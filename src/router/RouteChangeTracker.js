import { useEffect } from 'react';
import ReactGA4 from 'react-ga4';
import { useLocation } from 'react-router-dom';

export const RouteChangeTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      ReactGA4.send('page_view', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

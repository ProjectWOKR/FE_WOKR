import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA4 from 'react-ga4';

const RouteChangeTracker = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA4.send('page_view', {
      page_path: location.pathname + location.search,
    });
  }, [location]);

  return null;
};

export default RouteChangeTracker;

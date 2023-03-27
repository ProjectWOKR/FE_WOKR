import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA4 from 'react-ga4';

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

export const trackEvent = (eventName, eventData) => {
  if (process.env.NODE_ENV !== 'development') {
    ReactGA4.send(eventName, eventData);
  }
};

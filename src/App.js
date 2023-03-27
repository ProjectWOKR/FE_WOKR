import Router from './router/Router';
import RouteChangeTracker from './router/RouteChangeTracker';
// import ReactGA from 'react-ga';

function App() {
  RouteChangeTracker();
  return <Router />;
}

export default App;

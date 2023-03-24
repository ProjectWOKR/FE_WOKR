import Router from './router/Router';
import RouteChangeTracker from './router/RouteChangeTracker';
function App() {
  RouteChangeTracker();
  return <Router />;
}

export default App;

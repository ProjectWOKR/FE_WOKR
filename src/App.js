import Router from './router/Router';
import RouteChangeTracker from './router/RouteChangeTracker';
function App() {
  return (
    <>
      <RouteChangeTracker />
      <Router />
    </>
  );
}

export default App;

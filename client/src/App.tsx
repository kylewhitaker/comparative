import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { PageTemplate } from './pages/PageTemplate';
import './App.css';
import { StateProvider } from './core/StateContext';
import { RouteValidator } from './components/RouteValidator';

function App() {
  return (
    <StateProvider>
      <Router>
        <Switch>
          <Route path="/:iso_code">
            <RouteValidator>
              <PageTemplate />
            </RouteValidator>
          </Route>
          <Route path="/">
            <Redirect to="/OWID_WRL" />
          </Route>
        </Switch>
      </Router>
    </StateProvider>
  );
}

export default App;

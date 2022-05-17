import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import { StateProvider } from './core/StateContext';
import { ViewsContainer } from './pages/ViewsContainer';
import { Box } from '@mui/material';

function App() {
  return (
    <StateProvider>
      <Router>
        <Box display="flex" flexDirection="column" alignItems="center" padding="1rem">
          <Box display="flex" alignItems="center">
            <Link to="/?iso_code=OWID_WRL" style={{ padding: '0 1rem' }}>
              Single
            </Link>
            <Link to="/?iso_code=OWID_WRL,USA" style={{ padding: '0 1rem' }}>
              Compare
            </Link>
          </Box>
        </Box>
        <Switch>
          <Route path="/">
            {/* <RouteValidator> */}
            <ViewsContainer />
            {/* </RouteValidator> */}
          </Route>
        </Switch>
      </Router>
    </StateProvider>
  );
}

export default App;

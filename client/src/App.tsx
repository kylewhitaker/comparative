import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Box } from '@mui/material';
import { StateProvider } from './core';
import { ViewsContainer } from './pages/ViewsContainer';
import './App.css';

function App() {
  return (
    <StateProvider>
      <Router>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box display="flex" alignItems="center" padding="2rem 0 1rem">
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
            <ViewsContainer />
          </Route>
        </Switch>
      </Router>
    </StateProvider>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DashboardPage from './pages/DashboardPage';
import SecureRoute from './components/SecureRoute';
import AdminPage from './pages/AdminPage'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={DashboardPage}/>
        <SecureRoute exact path='/admin' component={AdminPage}/>
        <Route path='/login' component={LoginPage}/>
      </Switch>
    </Router>
  );
}

export default App;

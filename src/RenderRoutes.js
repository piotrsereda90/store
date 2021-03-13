import DashboardPage from './pages/DashboardPage';
import SecureRoute from './components/SecureRoute';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import Basket from './components/Basket'
import NoMatch from './components/NoMatch'
import {
  Switch,
  Route,
} from "react-router-dom";

export function renderRoutes(){
  return (
    <Switch>
      <Route exact path='/' component={DashboardPage}/>
      <SecureRoute exact path='/admin/dashboard' component={AdminPage}/>
      <Route exact path='/login' component={LoginPage}/>
      <Route path='/dashboard/basket' component={Basket}/>
      <Route path="*" component={NoMatch}/>
    </Switch>
   );
}

import DashboardPage from './pages/DashboardPage';
import SecureRoute from './components/SecureRoute';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import Basket from './components/Basket';
import ProductCard from './components/ProductCard';
import OrderSummary from './components/OrderSummary';
import { OrdersAdmin, InvoicesAdmin, AddProduct, UpdateProduct} from './pages/AdminPage';
import {ProductsAdmin} from './pages/AdminPage';
import NoMatch from './components/NoMatch';
import {
  Switch,
  Route,
} from "react-router-dom";

export function renderRoutes(){
  return (
    <Switch>
      <Route exact path='/' component={DashboardPage}/>
      <SecureRoute exact path='/admin/dashboard' component={AdminPage}/>
      <SecureRoute exact path='/admin/dashboard/products' component={ProductsAdmin}/>
      <SecureRoute exact path='/admin/dashboard/orders' component={OrdersAdmin}/>
      <SecureRoute exact path='/admin/dashboard/invoices' component={InvoicesAdmin}/>
      <SecureRoute exact path='/admin/dashboard/products/addProduct' component={AddProduct}/>
      <SecureRoute exact path='/admin/dashboard/products/updateProduct/:id' component={UpdateProduct}/>
      <Route exact path='/login' component={LoginPage}/>
      <Route path='/dashboard/basket' component={Basket}/>
      <Route path='/product/:id' component={ProductCard}/>
      <Route path='/order/summary/' component={OrderSummary}/>
      <Route path='*' component={NoMatch}/>

    </Switch>
   );
}

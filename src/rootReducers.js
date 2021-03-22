import {combineReducers} from 'redux';
import reducerProducts from './components/ProductsCard/containers/redux/reducer_products';

const rootReducers = combineReducers({
  products:reducerProducts
})
export default rootReducers
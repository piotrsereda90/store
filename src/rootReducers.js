import {combineReducers} from 'redux';
import reducerProducts from './components/ProductsCard/containers/redux/reducer_products';
import reducerCategories from './components/SideBar/containers/redux/reducer_categories';
import reducerFilterCategories from './components/SideBar/containers/redux/reducer_filter'

const rootReducers = combineReducers({
  products:reducerProducts,
  categories: reducerCategories,
  filter: reducerFilterCategories,
})
export default rootReducers
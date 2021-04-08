import {combineReducers} from 'redux';
import reducerProducts from './components/ProductsCard/containers/redux/reducer_products';
import reducerCategories from './components/SideBar/containers/redux/reducer_categories';
import reducerFilterCategories from './components/SideBar/containers/redux/reducer_filter';
import reducerOrder from './components/ProductCard/containers/redux/reducer_order';
import reducerRecommendedProducts from './components/RecommendedProducts/containers/redux/reducer_recommended_products';

const rootReducers = combineReducers({
  products:reducerProducts,
  categories: reducerCategories,
  filter: reducerFilterCategories,
  order: reducerOrder,
  recommendedProducts:reducerRecommendedProducts
})
export default rootReducers
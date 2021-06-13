import api from '../../../../api';

const FETCH_RECOMMENDED_PRODUCTS_REQUESTED = `FETCH_RECOMMENDED_PRODUCTS_REQUESTED`;
const FETCH_RECOMMENDED_PRODUCTS_SUCCEEDED = `FETCH_RECOMMENDED_PRODUCTS_SUCCEEDED`;
const FETCH_RECOMMENDED_PRODUCTS_FAILED = `FETCH_RECOMMENDED_PRODUCTS_FAILED`;

const INITIAL_STATE = {
  recommendedProducts:[],
  isLoading:true,
  isError:false,
}

const fetchRequested = () => ({type:FETCH_RECOMMENDED_PRODUCTS_REQUESTED});
const fetchFailed = () => ({type: FETCH_RECOMMENDED_PRODUCTS_FAILED})
const fetchSucceeded = (data) => ({
  type: FETCH_RECOMMENDED_PRODUCTS_SUCCEEDED,
  payload:data
});

  export const fetchRecommendedProducts= () => {
    return function(dispatch){
      dispatch(fetchRequested())
      api
      .recommendedProducts()
      .then(response => {
        dispatch(fetchSucceeded(response.data.data));
      })
      .catch(error => {
        dispatch(fetchFailed)
      });
    };
  };

   const reducerRecommendedProducts= (state=INITIAL_STATE, action) => {
    switch(action.type){
      case FETCH_RECOMMENDED_PRODUCTS_REQUESTED:
        return{
          ...state,
          isLoading: true,
          isError:false
        }
      case FETCH_RECOMMENDED_PRODUCTS_SUCCEEDED:
        return{
          ...state,
          isLoading: false,
          isError:false,
          recommendedProducts: action.payload
        }
      case FETCH_RECOMMENDED_PRODUCTS_FAILED:
        return{
          ...state,
          isLoading:false,
          isError:true
        }
      default: return state
    }
  }
  export default reducerRecommendedProducts
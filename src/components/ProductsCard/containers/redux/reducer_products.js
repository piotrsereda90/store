import api from '../../../../api'

const FETCH_PRODUCTS_REQUESTED = `FETCH_PRODUCTS_REQUESTED`;
const FETCH_PRODUCTS_SUCCEEDED = `FETCH_PRODUCTS_SUCCEEDED`;
const FETCH_PRODUCTS_FAILED = `FETCH_PRODUCTS_FAILED`;

const INITIAL_STATE = {
  products:[],
  isLoading:true,
  isError:false,
}

const fetchRequested = () => ({type:FETCH_PRODUCTS_REQUESTED});
const fetchFailed = () => ({type: FETCH_PRODUCTS_FAILED})
const fetchSucceeded = (data) => ({
    type: FETCH_PRODUCTS_SUCCEEDED,
    payload:data
  });

  export const fetchProducts= () => {
    return function(dispatch){
      dispatch(fetchRequested())
      api
      .products()
      .then(response => {
        dispatch(fetchSucceeded(response.data.data));
      })
      .catch(error => {
        dispatch(fetchFailed)
      });
    };
  };

  export default (state=INITIAL_STATE, action) => {
    switch(action.type){
      case FETCH_PRODUCTS_REQUESTED:
        return{
          ...state,
          isLoading: true,
          isError:false
        }
        case FETCH_PRODUCTS_SUCCEEDED:
          return{
            ...state,
            isLoading: false,
            isError:false,
            products: action.payload
          }
        default: return state
    }
  }

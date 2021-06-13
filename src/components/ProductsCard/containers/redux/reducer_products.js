import api from '../../../../api';

const FETCH_PRODUCTS_REQUESTED = 'FETCH_PRODUCTS_REQUESTED';
const FETCH_PRODUCTS_SUCCEEDED = 'FETCH_PRODUCTS_SUCCEEDE';
const FETCH_PRODUCTS_FAILED = 'FETCH_PRODUCTS_FAILED';
const CHANGE_PRODUCT_PAGE_NUMBER = 'CHANGE_PRODUCT_PAGE_NUMBER';

const INITIAL_STATE = {
  products:[],
  isLoading:true,
  isError:false,
  pageNumber: 1,
}

const fetchRequested = () => ({type:FETCH_PRODUCTS_REQUESTED});
const fetchFailed = () => ({type: FETCH_PRODUCTS_FAILED})
const fetchSucceeded = (data) => ({
  type: FETCH_PRODUCTS_SUCCEEDED,
  payload:data
});
export const changeProductPageNumber = (pageNumber) => ({
  type: CHANGE_PRODUCT_PAGE_NUMBER,
  payload: pageNumber
})

  export const fetchProducts= () => {
    return function(dispatch){
      dispatch(fetchRequested())
      api
      .products()
      .then(response => {
        dispatch(fetchSucceeded(response.data.data));
      })
      .catch(error => {
        console.log(error)
        dispatch(fetchFailed())
      });
    };
  };

   const reducerProducts= (state=INITIAL_STATE, action) => {
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
        case FETCH_PRODUCTS_FAILED:
          return{
            ...state,
            isLoading:false,
            isError:true
        }
        case CHANGE_PRODUCT_PAGE_NUMBER:
          return{
            ...state,
            pageNumber: action.payload
          }
        default: return state
    }
  }
  export default reducerProducts

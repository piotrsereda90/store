import api from '../../../../api'


const CATEGORIES_FETCH_REQUESTED = 'CATEGORIES_FETCH_REQUESTED';
const CATEGORIES_FETCH_SUCCEEDED = 'CATEGORIES_FETCH_SUCCEEDED';
const CATEGORIES_FETCH_FAILED = 'CATEGORIES_FETCH_FAILED';


const INITIAL_STATE = {
  categories:[],
  isLoading:true,
  isError:false
}

const fetchRequested= ()=> ({type:CATEGORIES_FETCH_REQUESTED});
const fetchFailed = () => ({type: CATEGORIES_FETCH_FAILED});
const fetchSucceeded = (data) => ({
  type:CATEGORIES_FETCH_SUCCEEDED,
  payload:data
})

export const fetchCategories = () => {
  return function(dispatch){
    dispatch(fetchRequested())
    api
    .categories()
    .then(response =>{
      dispatch(fetchSucceeded(response.data.categories));
    })
    .catch(error =>{
      console.log(error)
      dispatch(fetchFailed())
    });
  }
}

const reducerCategories = (state=INITIAL_STATE, action)=> {
  switch(action.type){
    case CATEGORIES_FETCH_REQUESTED:
      return{
        ...state,
        isLoading:true,
        isError:false
      }
    case CATEGORIES_FETCH_SUCCEEDED:
      return{
        ...state,
        isLoading:false,
        isError:false,
        categories: action.payload
      }
    case CATEGORIES_FETCH_FAILED:
      return{
        ...state,
        isLoading: false,
        ieError:true
      }
      default: return state

  }

}
export default reducerCategories
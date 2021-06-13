const reducerFilterCategories = (state='all', action) => {
  switch(action.type){
    case 'FILTER_CATEGORY':
    return action.filter
    default: return  state
  }
}
export default reducerFilterCategories;
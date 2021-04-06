const ADD_PRODUCT_TO_BASKET = 'ADD_PRODUCT_TO_BASKET'
const ADD_PRODUCT_ITEM = 'ADD_PRODUCT_ITEM'
const REMOVE_PRODUCT_ITEM = ' REMOVE_PRODUCT_ITEM'
const REMOVE_PRODUCT_FROM_BASKET = 'REMOVE_PRODUCT_FROM_BASKET'

// const INITIAL_STATE = {
//   orderProduct:[],
//   productAmount: 0
// }
export const addProductToBasket = (payload) => ({
  type: ADD_PRODUCT_TO_BASKET,
  payload,
})

export const addProductAmount = (id) => ({
  type: ADD_PRODUCT_ITEM,
  id
})
export const removeProductAmount = (id) => ({
  type: REMOVE_PRODUCT_ITEM,
  id
})
export const removeProductFromBasket = (id) => ({
  type: REMOVE_PRODUCT_FROM_BASKET,
  id
})

const orderReducer = (state=[], action) => {
  console.log( state)
  switch(action.type){
    case ADD_PRODUCT_TO_BASKET:
      const {id,name, category,img, description,amount} = action.payload
      return [...state,
        {
          id,
          name,
          category,
          img,
          description,
          amount
        }
      ];
    case ADD_PRODUCT_ITEM:
      return state.map(product => {
        const addProduct = product.id ===action.id
        return{
          ...product,
          amount: addProduct? product.amount +1 : product.amount
        }
      })
    case REMOVE_PRODUCT_ITEM:
      return state.map(product => {
        const removeProduct = product.id ===action.id
        return{
          ...product,
          amount: removeProduct? product.amount -1:product.amount
        }
      })
      case REMOVE_PRODUCT_FROM_BASKET:
      const index = state.map(item => item.id).indexOf(action.id);
      const stateTemp = [
        ...state.slice(0,index),
        ...state.slice(index +1)
      ]
      return stateTemp

      default: return state
    };
};
export default orderReducer;
import React from 'react';

import {connect} from 'react-redux';
import {changeProductPageNumber} from '../ProductsCard/containers/redux/reducer_products';

const FilterButton = ({children, onClick, changeProductPageNumber}) => {

  const pageNumber = 1;

  const handelClick = () => {
    onClick();
    changeProductPageNumber(pageNumber);
  }
  return (
    <button onClick={()=>handelClick()}>{children}</button>
   );
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeProductPageNumber: (pageNumber)=>dispatch(changeProductPageNumber(pageNumber)),
  onClick: () => dispatch({
    type: 'FILTER_CATEGORY',
    filter: ownProps.filter,
  })
});
export default connect(null, mapDispatchToProps) (FilterButton);
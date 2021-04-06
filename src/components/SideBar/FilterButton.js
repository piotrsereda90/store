import React from 'react';

import {connect} from 'react-redux';

const FilterButton = ({children, onClick}) => {
  return (
    <button onClick={onClick}>{children}</button>
   );
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch({
    type: 'FILTER_CATEGORY',
    filter: ownProps.filter
  })
})
export default connect(null, mapDispatchToProps) (FilterButton);
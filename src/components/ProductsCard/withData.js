import React from 'react'

import api from '../../api'

function withData(WrappedComponent){
  return class extends React.Component {
    constructor(props){
      super(props)
      this.state={
        apiData: []
      }
    }
    componentDidMount(){
      api
      .products()
      .then(result =>{
        this.setState({
          apiData:result.data.data
        })
      })
      .catch(error => {
        throw new Error(error)
      })

    }
    render(){
      return(
        <WrappedComponent
        apiData={this.state.apiData}
        {...this.props}
      />
      )}
  }
}
export default withData

import React from 'react'
import { connect } from 'react-redux'
import {fetUser} from '../actions/userActions'

class Layout extends React.Component{
  render(){
    return (
      <button onClick={this.props.onClick}>Click here</button>
    )
  }
}

function mapStateToProps(store){
  console.log(store)
  return store
}

function mapDispatchToProps(dispatch){
  return {
    onClick: ()=>{
      dispatch(fetUser());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)

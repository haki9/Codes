import React from 'react'
import {Link} from 'react-router'

const Layout = React.createClass({
  navigate(){
    console.log(this.props);
  },
  render(){
    return(
      <div>
        <h1>Layout Page</h1>
        {this.props.children}
        <Link to='setting' class='btn btn-danger'>Setting</Link>
        <Link to='/'><button class='btn btn-success'>Feature</button></Link>
        <button onClick={this.navigate}>LOGs</button>
      </div>
    )
  }
})

export default Layout

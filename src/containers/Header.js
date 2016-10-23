import React, {Component} from 'react';
import {connect} from 'react-redux'
class Header extends Component {
  constructor(props) {
    super(props);
  }

  renderUserData(){
    if(this.props.authed.isLogin){
      return(
        <div>
          <div>name : {this.props.authed.userdata.username}</div>
          <div>email : {this.props.authed.userdata.email}</div>
        </div>
      )
    }
  }
  render() {
    var usernameView = this.props.authed.isLogin ? <h1>{this.props.authed.username}</h1> : "";
    return (<div>
      <h3>Header</h3>
    <ul>
      Wellcome :{usernameView}
      <br/>
      {this.renderUserData()}
    </ul>
    </div>);
  }
}
var mapStateToProp = function(state) {
  return state;
}
export default connect(mapStateToProp)(Header)

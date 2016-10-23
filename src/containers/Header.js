import React, {Component} from 'react';
import {connect} from 'react-redux'
class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var usernameView = this.props.authed.isLogin ? <h1>{this.props.authed.username}</h1> : "";
    return (<div>
      <h3>Header</h3>
    <ul>
      Wellcome :{usernameView}
    </ul>
    </div>);
  }
}
var mapStateToProp = function(state) {
  return state;
}
export default connect(mapStateToProp)(Header)

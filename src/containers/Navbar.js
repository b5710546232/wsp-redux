import React, {Component} from 'react';
import {connect} from 'react-redux'
import {login,logout} from '../actions/AuthedAction'
class Navbar extends Component {
  onLogin(e){
    e.preventDefault()
    console.log('hi');
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    console.log(username);
    console.log(password);

    let data = {
      username: username,
      password: password
    }
    this.props.login(data)

    this.refs.username.value = ''
  }
  onLogout(e){e.preventDefault()

    this.props.logout()
  }
  renderButton(){
    if(!this.props.authed.isLogin) {
      return <button onClick={(e)=>this.onLogin(e)} type="submit" >login</button>
    }
     return <button onClick={(e)=>this.onLogout(e) } >logout</button>
  }

  render() {
    return (<div>
      <h3>Navbar</h3>
    <ul>
      <form action="">
        <input type="text"
          ref = "username"
          />
          <input type="text"
            ref = "password"
            />
          {this.renderButton()}
      </form>
    </ul>
    </div>);
  }
}
const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    login: (username) => {
      dispatch(login(username))
    },
    logout: () => {
      dispatch(logout())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Navbar);

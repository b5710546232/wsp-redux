import React, {Component} from 'react';
import {connect} from 'react-redux'
import {createCategory} from '../actions/CategoryAction'

class CategoryInput extends Component {
  constructor(props) {
    super(props);
  }
  onAddCategory(e){
    e.preventDefault()
    let data = {
      name:this.refs.name.value,
      description:this.refs.description.value,
    }
    let token = this.props.authed.accessToken
    console.log(token);
    this.props.onCreateCategory(data,token)

  }
  render() {
    var usernameView = this.props.authed.isLogin ? <h1>{this.props.authed.username}</h1> : "";
    return (
      <div>
      <h3>Category</h3>
        <form action="">
          <input type="text"
            ref = "name"
            placeholder = "name"
            />
            <input type="text"
              ref = "description"
              placeholder="description"
              />
          <button type="submit" onClick = {(e)=>this.onAddCategory(e)}>ADD</button>
        </form>
    </div>);
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onCreateCategory: (categoryData,token) => {
      dispatch(createCategory(categoryData,token))
    }
  }
}
const mapStateToProp = (state) =>{
  return state;
}
export default connect(mapStateToProp,mapDispatchToProps)(CategoryInput)

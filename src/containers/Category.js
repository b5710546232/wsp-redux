import React, {Component} from 'react';
import {connect} from 'react-redux'
import {updateCategory} from '../actions/CategoryAction'
class Category extends Component {
  onUpdate(e){
    e.preventDefault()
    let name = this.refs.name.value
    let description = this.refs.description.value
    let data = {
      name:name,
      description:description
    }
    let token = this.props.authed.accessToken
    let id = this.props.id
    this.props.onUpdateCategory(data,id,token)
  }
  render() {
    const {name,description} = this.props
    return(
      <div>
      <form action="">
        <h4>Category</h4>
         <input type="text"
          defaultValue = {name}
          ref = "name"
          />
        <br/>
          <input type="text"
            defaultValue = {description}
            ref = "description"
            />
          <button type="submit"
            onClick = {(e)=>this.onUpdate(e)}
            >update</button>
      </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) =>{
  return {
    onUpdateCategory: (data,id,token) => {
      dispatch(updateCategory(data,id,token))
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Category)

import React, {Component} from 'react';
import {connect} from 'react-redux'
import {createProduct} from '../actions/ProductAction'

class ProductInput extends Component {
  constructor(props) {
    super(props);
  }
  onAddProduct(e){
    e.preventDefault()
    // {name,description,price,category}
    let data = {
      name:this.refs.name.value,
      description:this.refs.description.value,
      price:this.refs.price.value,
      category:this.refs.category.value
    }
    let token = this.props.authed.accessToken
    console.log(token);
    this.props.onCreateProduct(data,token)

  }
  render() {
    var usernameView = this.props.authed.isLogin ? <h1>{this.props.authed.username}</h1> : "";
    return (
      <div>
      <h3>Product</h3>
        <form action="">
          <input type="text"
            ref = "name"
            placeholder = "name"
            />
            <input type="text"
              ref = "description"
              placeholder="description"
              />
              <input type="text"
                ref = "price"
                placeholder="price"
                />
                <input type="text"
                  ref = "category"
                  placeholder="category"
                  />
                <button type="submit" onClick = {(e)=>this.onAddProduct(e)}>ADD</button>
        </form>
    </div>);
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onCreateProduct: (data,token) => {
      dispatch(createProduct(data,token))
    }
  }
}
const mapStateToProp = (state) =>{
  return state;
}
export default connect(mapStateToProp,mapDispatchToProps)(ProductInput)

import React, {Component} from 'react';
import {connect} from 'react-redux'
import Category from './Category'
import {loadCategoryList} from '../actions/CategoryAction'

class CategoryList extends Component {
  componentDidMount(){
    this.props.onLoadCategoryList()
    console.log('list',this.props.categories)
  }
  shouldComponentUpdate(nextProps){
    console.log('update');
    return this.props.categories !== nextProps
  }
  render() {
    return(
      <div>
        <h3>CategoryList</h3>
        <ul>

          {/* {this.props.categories} */}
            {this.props.categories.map((category) =>
              (<Category
                key={category.id}
                {...category}
                />)
            )}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    onLoadCategoryList: () => {
      dispatch(loadCategoryList())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CategoryList)

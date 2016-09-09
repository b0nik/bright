import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import * as actions from './actions'
import {connect} from 'react-redux'

// components

import Item from './../blocks/product_item/product_item'

function mapStateToProps(state) {
    return {
        loaded: state.products.loaded,
        products: state.products.data
    }
}
function mapDispatchToProps(dispatch) {
    return {
        socialActions: bindActionCreators(actions, dispatch)
    }
}

class Product extends Component{
    componentWillMount(){
        this.props.socialActions.getData();
    }

    render(){
        let result;
        if(this.props.loaded){
           result= <Item className="itemmmm" item={this.props.products[0]}/>
        }else{
            result= <p>loading....</p>
        }
        return(
            <div className="items-list clearfix">
                {result}
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Product);
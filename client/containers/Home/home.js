import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as pageActions from './actions'
import 'whatwg-fetch';
import Helmet from "react-helmet";

import Product from './../../components/product/product'

function mapStateToProps(state) {
    return {
        pages: state.pages
    }
}
//
// function mapDispatchToProps(dispatch) {
//     return {
//         homeActions: bindActionCreators(pageActions, dispatch)
//     }
// }

class Home extends Component {

    findPage(){
        return this.props.pages.filter(item=>{
            if(`${item.link}`==='/') return item
        })
    }

    render() {
        const styles = require('./styles.less');
        const page=this.findPage()[0];
            return (
                <div>
                    <Helmet
                        title={page.name}
                    />
                    <div className={styles.wrap}><h1 dangerouslySetInnerHTML={{__html: page.title}} className='title'/></div>
                    <Product/>
                </div>
            )
        }
}

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(Home);

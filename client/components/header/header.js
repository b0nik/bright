import React, {Component} from 'react';
import { Link } from 'react-router'
import {bindActionCreators} from 'redux'
import * as actions from './actions'
import {connect} from 'react-redux'
import Nav from '../blocks/navigator'

function getProps(state) {
    return{
        links:state.links.links,
        loaded:state.links.loaded
    }
}

class Header extends Component{

    render(){
        const styles=require('./header.less');
        return(
            <div className="header clerfix">
                <div className="header__wrapper">
                    <Link to="/" className="header__logo"><img src={require('./img/logo.png')} alt="logo" className="logo"/></Link>
                    {this.props.loaded?
                        <Nav {...this.props} data={this.props.links} className={styles.nav} activeClass={styles.active}/>:
                        <p>loading...</p>
                    }

                </div>
            </div>
        )
    }
}

export default Header=connect(
    getProps
)(Header)
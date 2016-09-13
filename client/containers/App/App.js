import React, {Component} from 'react';
const styles = require('./styles.less');

// components
import Header from './../../components/header/header'
import Footer from './../../components/footer/footer'

export default class Default extends Component {

    render() {
        console.log(Footer)
        require('./img/favicon.ico');
        return (
            <div>
                <Header {...this.props}/>
                <div className="wrapper">
                    {this.props.children}
                    <Footer/>
                </div>
            </div>
        )
    }
}

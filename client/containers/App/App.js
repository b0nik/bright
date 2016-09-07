import React, {Component} from 'react';
const styles = require('./styles.less');

// components
import Header from './../../components/header/header'

export default class Default extends Component {

    render() {
        return (
            <div>
                <Header {...this.props}/>
                <div className="wrapper">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

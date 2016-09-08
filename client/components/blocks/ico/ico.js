import React, {Component} from 'react';

export default class Ico extends Component{
    render(){
        require('./styles.less');
        return(
            <i className={`sprite sprite-${this.props.ico}`}></i>
        )
    }
}
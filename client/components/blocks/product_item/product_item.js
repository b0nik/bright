import React, {Component} from 'react';
import {Link} from 'react-router'

export default class Item extends Component{
    render(){
        const path='./media/';
        return(
            <div className={this.props.className}>
                <div className="item-general-information">
                    <h5 className="item-name">{this.props.item.title}</h5>
                    <span className="item-category">{this.props.item.sub_title}</span>
                </div>
                <div className="item-content">
                    <div className="item-image"><img src={this.props.item.src?`${path}${this.props.item.src}`:`${path}technics.jpg`} alt={this.props.item.title}/></div>
                    <Link className="item-more" to="/"><img src={require('./search.png')} alt="More"/></Link>
                </div>
            </div>
        )
    }
}
import React, {Component} from 'react';

export default class Item extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <div className="item-general-information">
                    <h5 className="item-name">{this.props.item.title}</h5>
                    <span className="item-category">{this.props.item.sub_title}</span>
                </div>
                <div className="item-content">
                    <div className="item-image"><img src="" alt={this.props.item.title}/></div>
                    <a className="item-more" href="/"><img src={require('./search.png')} alt="More"/></a>
                </div>
            </div>
        )
    }
}
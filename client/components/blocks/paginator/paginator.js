import React, {Component} from 'react';

import Ico from '../../blocks/ico/ico'

export default class Paginator extends Component{
    render(){
        let templateNumber=[];
        for(let i=this.props.from,len=this.props.to; i<len&&i<this.props.range+this.props.from;i++){
            let activeClass='';
            if(i==0) activeClass='pgn-active';
            templateNumber.push(<li key={i} className={`paginator-item ${activeClass}`}><a onClick={this.props.btnClick} className="paginator-item-number" href={i}>{i+1}</a></li>)
        }
        return (
            <ul className={this.props.className} >
                <li className="paginator-item"><a className="paginator-btn btn-prv" onClick={this.props.btnClickMore.bind(event,-this.props.range)} href='*'><Ico ico='pgn-back'/></a></li>
                <li className="paginator-item"><a className="paginator-btn btn-prv" onClick={this.props.btnClickMore.bind(event, -1)} href="*"><Ico ico='pgn-back-more'/></a></li>
                {templateNumber}
                <li className="paginator-item"><a className="paginator-btn btn-next" href="*"  onClick={this.props.btnClickMore.bind(event, 1)}><Ico ico='pgn-next-more'/></a></li>
                <li className="paginator-item"><a className="paginator-btn btn-next" href="*" onClick={this.props.btnClickMore.bind(event, this.props.range)}><Ico ico='pgn-next'/></a></li>
            </ul>
        )
    }
}
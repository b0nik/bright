import React, {Component} from 'react';
import { Link } from 'react-router'

export default class Nav extends Component {

    render(){
        const template=this.props.data.map((item,i)=>{
            let link=`/${item.link}`;
            if(item.link==='/'){link='/'}
            return  <li key={i}><Link activeClassName={this.props.activeClass} to={link}>{item.name}</Link></li>
        });
        return(
            <nav className={this.props.className}>
                {template}
            </nav>

        )
    }
}

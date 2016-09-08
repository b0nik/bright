import React, {Component} from 'react';
import {connect} from 'react-redux'
import Helmet from "react-helmet";

function mapStateToProps(state) {
    return {
        pages: state.pages
    }
}

class Default extends Component{
    findPage(){
        return this.props.pages.filter(item=>{
            if(`/${item.link}`===this.props.location.pathname) return item
        })
    }
    render(){
        const page=this.findPage()[0];
        return(
            <div>
                <Helmet
                    title={page.name}
                />
                <h1>{page.title}</h1>
             </div>
        )
    }
}


export default connect(
    mapStateToProps,
)(Default);
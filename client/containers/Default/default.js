import React, {Component} from 'react';
import {connect} from 'react-redux'


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
            <h1>{page.title}</h1>
        )
    }
}


export default connect(
    mapStateToProps,
)(Default);
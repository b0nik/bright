import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import * as actions from './actions'
import Ico from './../blocks/ico/ico'
import {connect} from 'react-redux'

function mapStateToProps(state) {
    return {
        loaded: state.social.loaded,
        data: state.social.data
    }
}
function mapDispatchToProps(dispatch) {
    return {
        socialActions: bindActionCreators(actions, dispatch)
    }
}

class Social extends Component {
    componentWillMount() {
        this.props.socialActions.addItems();
    }

    render() {
        let result;
        if (this.props.loaded) {
            result = this.props.data.map((item, i)=> {
                return <a target="_blank" key={i} href={item.link}><Ico ico={item.name}/></a>
            })
        }
        else {
            result = (
                <p>loading...</p>
            )
        }
        return (
            <div className={this.props.className}>
                {result}
            </div>
        )
    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Social);
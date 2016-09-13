import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import * as actions from './actions'
import {connect} from 'react-redux'

// components

import Item from './../blocks/product_item/product_item'
import Paginator from './../blocks/paginator/paginator'

function mapStateToProps(state) {
    return {
        loaded: state.products.loaded,
        products: state.products.data
    }
}
function mapDispatchToProps(dispatch) {
    return {
        socialActions: bindActionCreators(actions, dispatch)
    }
}

class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            range: props.range,
            count: 0,
            minCount: 0,
            maxCount: props.count
        };
        this.btnClick = this.btnClick.bind(this);
        this.btnClickMore = this.btnClickMore.bind(this);
        this.getLength = this.getLength.bind(this);
    }

    componentWillMount() {
        this.props.socialActions.getData();
    }

    componentDidUpdate() {
        this.addActiveClass();
    }

    addActiveClass() {
        const activeClass = 'pgn-active';
        const targets = document.querySelectorAll('.paginator-item');
        const prvBtn = document.querySelectorAll('.btn-prv');
        const nextBtn = document.querySelectorAll('.btn-next');

        for (let item of targets) {
            if (item.className.indexOf(activeClass) !== -1) {
                item.className = item.className.replace(activeClass, '');
            }
            if (item.children[0].href.slice(+item.children[0].href.lastIndexOf('/') + 1) == this.state.count) {
                item.className = item.className + activeClass;
            }
        }

        for (let key of prvBtn) {
            if (this.state.count == 0) {
                key.closest(".paginator-item").style.visibility = 'hidden';
            }else {
                key.closest(".paginator-item").style.visibility = 'visible';
            }
        }

        for (let item of nextBtn) {
            if (this.state.count == this.getLength() - 1) {
                item.closest(".paginator-item").style.visibility = 'hidden';
            }else {
                item.closest(".paginator-item").style.visibility = 'visible';
            }
        }
    }

    getLength() {
        return this.props.products.length % this.state.range ? Math.floor(this.props.products.length / this.state.range) + 1 : this.props.products.length / this.state.range
    }

    setCount(newCount) {
        this.setState({count: newCount});
    }

    checkMinCount(count) {
        let counter = count + 1 - this.state.maxCount;
        if (counter < 0) {
            this.setState({minCount: 0})
        }
        else {
            this.setState({minCount: counter})
        }
    }

    btnClick(e) {
        this.addActiveClass(+e.target.href.slice(+e.target.href.lastIndexOf('/') + 1));
        this.setCount(+e.target.href.slice(+e.target.href.lastIndexOf('/') + 1));
        e.preventDefault();
        e.stopPropagation()
    }

    btnClickMore(newCount, e) {
        let count = this.state.count + Number(newCount);
        const len = this.getLength();
        if (len < count + 1) {
            count = len - 1;
        }
        if (count < 0) {
            count = 0
        }
        this.checkMinCount(+count);
        this.setCount(+count);
        e.preventDefault();
        e.stopPropagation()
    }

    filterShowPaginstion() {
        let temp = this.state.range * this.state.count;
        return this.props.products.slice(temp, temp + this.state.range)
    }

    render() {
        const styles = require("./styles.less");
        let result;
        if (this.props.loaded) {
            result = this.filterShowPaginstion().map((item, i)=> {
                return (
                    <Item key={i} className={styles.product} item={item}/>
                )
            })

        } else {
            result = <p>loading....</p>
        }
        return (
            <div className="product-content">
                <div className="items-list clearfix">
                    {result}
                </div>
                <div className="paginator clearfix">
                    {this.props.loaded
                        ?
                        <Paginator
                            range={this.state.maxCount}
                            btnClick={this.btnClick}
                            btnClickMore={this.btnClickMore}
                            from={this.state.minCount}
                            to={this.state.minCount + this.state.range}
                            className={styles.paginator}/>
                        :
                        null}
                </div>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Product);
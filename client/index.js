import reactDom from 'react-dom';
import React from 'react';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import 'whatwg-fetch';

// ============== components
import home from './containers/Home/home';
import page404 from './containers/404/404';
import defaultComponent from './containers/Default/default';
const components={
    page404,
    home,
    defaultComponent
};
import App from './containers/App/App' ;

fetch('/pages', {
    headers: {
        "X-Requested-With": "XMLHttpRequest"
    }
})
    .then(
        (res)=> {
            return res.json()
        }
    )
    .then(
        data=> {
            const store = configureStore();
            dispatchLinks(store, data);
            dispatchPage(store,data)
            createRouting(store, data);
        }
    )
    .catch(error=> {
        console.log(error)
    });


function dispatchLinks(store, data) {
    store.dispatch({
        type: 'GET_LINKS',
        payload: data.map(item=> {
            return {
                name: item.name,
                link: item.link
            }
        })
    });
}
function dispatchPage(store, data) {
    store.dispatch({
        type: 'ADD_PAGE',
        payload: data
    });
}

function createRouting(store, data) {
    const tamplate = data.map((item, i)=> {
        let link = `/${item.link}`;
        if (item.link === '/') link = '/';
        return <Route key={i} path={link} component={item.component?components[item.component]:components.defaultComponent}/>
    });

    reactDom.render(
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route component={App}>
                    {tamplate}
                    <Route path='*' status={404} component={components.page404}/>
                </Route>
            </Router>
        </Provider>,
        document.getElementById('root')
    )
}
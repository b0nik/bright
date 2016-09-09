import { combineReducers } from 'redux'

import home from '../containers/Home/reducers'
import links from '../components/header/reducers'
import pages from '../containers/Default/reducers'
import social from '../components/social/reducers'
import products from '../components/product/reducers'

export const rootReducer= combineReducers({
    home,
    links,
    pages,
    social,
    products
});
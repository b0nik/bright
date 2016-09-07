import { combineReducers } from 'redux'

import home from '../containers/Home/reducers'
import links from '../components/header/reducers'
import pages from '../containers/Default/reducers'

export const rootReducer= combineReducers({
    home,
    links,
    pages
});
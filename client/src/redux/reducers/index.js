import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

const createRootReucer = (history) => 
combineReducers({
    router: connectRouter(history),
});

export default createRootReucer;
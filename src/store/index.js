import { createLogger } from "redux-logger"
import { createStore, applyMiddleware, compose } from "redux"
import combineReducers from "../reducers"
import thunk from "redux-thunk"


const initialState = {};

const store = createStore(
    combineReducers,
    initialState,
    compose(
        applyMiddleware(createLogger(), thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store;
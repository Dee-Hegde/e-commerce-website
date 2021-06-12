import { applyMiddleware, combineReducers, createStore } from "redux"
import { compose } from "redux"
import thunk from "redux-thunk"
import { loginreducer } from "./Login/reducer"
import { productsReducer } from "./ProductListing/reducer"


const rootreducer = combineReducers({
    loginred:loginreducer,
    products:productsReducer
})


const store = createStore(rootreducer, 
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    ))


    console.log(store.getState())

export default store;
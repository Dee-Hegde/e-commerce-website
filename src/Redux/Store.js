import { applyMiddleware, combineReducers, createStore } from "redux"
import { compose } from "redux"
import thunk from "redux-thunk"
import { loginReducer } from "./Login/reducer"
import { productsReducer } from "./ProductListing/reducer"
import { wishlistReducer } from "./Wishlist/reducer"
import { bagReducer } from "./Bag/reducer"


const rootreducer = combineReducers({
    loginred:loginReducer,
    products:productsReducer,
    wishlist:wishlistReducer,
    bag:bagReducer,

})

const store = createStore(rootreducer, 
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    ))

export default store;
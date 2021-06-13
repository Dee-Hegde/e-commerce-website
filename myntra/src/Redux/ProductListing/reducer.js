import { GET_DATA_FAILURE, GET_DATA_FILTER, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actionType";



const init = {
    data : [],
    filterData : [],
    isLoading : false,
    isError : false,
}

const productsReducer = (state = init, action) => {
    switch (action.type) {
        case GET_DATA_REQUEST: {
            return {
                ...state, isLoading : true
            }
        }
        case GET_DATA_SUCCESS: {
            return {
                ...state, data : action.payload, isLoading : false
            }
        }
        case GET_DATA_FAILURE: {
            return {
                ...state, isLoading : false, isError : true
            }
        }    
        case GET_DATA_FILTER: {
            return {
                ...state, filterData : action.payload, isLoading : false
            }
        }
        default:
            return state;
    }
}


export {productsReducer}
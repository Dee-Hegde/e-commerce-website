import { GET_WISH_FAILURE, GET_WISH_REQUEST, GET_WISH_SUCCESS, POST_WISH_FAILURE, POST_WISH_REQUEST, POST_WISH_SUCCESS } from "./actionTypes";

const initState = {
    isLoading: false,
    isError: false,
    isSuccess: false
}

export const reducer = (state=initState, {type, payload}) => {

    switch (type) {
        
        case POST_WISH_REQUEST :
        return {
            ...state,
            isLoading: true,
            isError: false,
            isSuccess: false
        }    
        
        case POST_WISH_SUCCESS :
        return {
            ...state,
            isLoading: false,
            isError: false,
            isSuccess: true
        }

        case POST_WISH_FAILURE :
        return {
            ...state,
            isLoading: false,
            isError: true,
            isSuccess: false
        }
        
        case GET_WISH_REQUEST :
        return {
            ...state,
            isLoading: true,
            isError: false,
            isSuccess: false
        }    
        
        case GET_WISH_SUCCESS :
        return {
            ...state,
            isLoading: false,
            isError: false,
            isSuccess: true
        }

        case GET_WISH_FAILURE :
        return {
            ...state,
            isLoading: false,
            isError: true,
            isSuccess: false
        }
    
        default:
            return state;
    }
}
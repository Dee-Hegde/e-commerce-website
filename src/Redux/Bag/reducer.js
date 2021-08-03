import { DELETE_BAG_FAILURE, DELETE_BAG_REQUEST, DELETE_BAG_SUCCESS, GET_BAG_FAILURE, GET_BAG_REQUEST, GET_BAG_SUCCESS, PATCH_BAG_FAILURE, PATCH_BAG_REQUEST, PATCH_BAG_SUCCESS, POST_BAG_FAILURE, POST_BAG_REQUEST, POST_BAG_SUCCESS } from "./actionTypes";

const initState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    bagData: []
}

export const bagReducer = (state=initState, {type, payload}) => {

    switch (type) {
        
        case POST_BAG_REQUEST :
        return {
            ...state,
            isLoading: true,
            isError: false,
            isSuccess: false
        }    
        
        case POST_BAG_SUCCESS :
        return {
            ...state,
            isLoading: false,
            isError: false,
            isSuccess: true
        }

        case POST_BAG_FAILURE :
        return {
            ...state,
            isLoading: false,
            isError: true,
            isSuccess: false
        }
        
        case GET_BAG_REQUEST :
        return {
            ...state,
            isLoading: true,
            isError: false,
            isSuccess: false
        }    
        
        case GET_BAG_SUCCESS :
        const updated = []
        for (let i=payload.length-1; i>=0; i--) {
            updated.push(payload[i])
        }
        return {
            ...state,
            bagData: updated,
            isLoading: false,
            isError: false,
            isSuccess: true
        }

        case GET_BAG_FAILURE :
        return {
            ...state,
            isLoading: false,
            isError: true,
            isSuccess: false
        }

        case DELETE_BAG_REQUEST :
        return {
            ...state,
            isLoading: true,
            isError: false,
            isSuccess: false
        }    
        
        case DELETE_BAG_SUCCESS :
        return {
            ...state,
            isLoading: false,
            isError: false,
            isSuccess: true
        }

        case DELETE_BAG_FAILURE :
        return {
            ...state,
            isLoading: false,
            isError: true,
            isSuccess: false
        }

        case PATCH_BAG_REQUEST :
        return {
            ...state,
            isLoading: true,
            isError: false,
            isSuccess: false
        }    
        
        case PATCH_BAG_SUCCESS :
        return {
            ...state,
            isLoading: false,
            isError: false,
            isSuccess: true
        }

        case PATCH_BAG_FAILURE :
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
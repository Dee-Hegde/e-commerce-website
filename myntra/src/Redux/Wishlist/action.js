import axios from "axios";

export const postWishRequest = () => {
    return {
        type: "POST_WISH_REQUEST"
    }
}

export const postWishSuccess = (payload) => {
    return {
        type: "POST_WISH_SUCCESS",
        payload
    }
}

export const postWishFailure = (err) => {
    return {
        type: "POST_WISH_FAILURE",
        payload: err
    }
}

export const getWishRequest = () => {
    return {
        type: "GET_WISH_REQUEST"
    }
}

export const getWishSuccess = (payload) => {
    return {
        type: "GET_WISH_SUCCESS",
        payload
    }
}

export const getWishFailure = (err) => {
    return {
        type: "GET_WISH_FAILURE",
        payload: err
    }
}

export const postWishData = payload => dispatch => {
    dispatch( postWishRequest() )

    return axios.post("https://masai-project.herokuapp.com/wihlist", payload )
    .then(res => {
        dispatch( postWishSuccess(res.data) )
        dispatch( getWishData(payload) )
    })
    .catch(err=> {
        dispatch( postWishFailure() )
    })
}

export const getWishData = payload => dispatch => {
    dispatch( getWishRequest() )

    return axios.get("https://masai-project.herokuapp.com/wihlist", payload )
    .then(res => {
        dispatch( getWishSuccess(res.data) )
    })
    .catch(err=> {
        dispatch( getWishFailure() )
    })
}

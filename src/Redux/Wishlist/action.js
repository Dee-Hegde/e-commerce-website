import axios from "axios";

export const postWishRequest = () => {
    return {
        type: "POST_WISH_REQUEST"
    }
}

export const postWishSuccess = () => {
    return {
        type: "POST_WISH_SUCCESS"
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

export const deleteWishRequest = () => {
    return {
        type: "DELETE_WISH_REQUEST"
    }
}

export const deleteWishSuccess = () => {
    return {
        type: "DELETE_WISH_SUCCESS"
    }
}

export const deleteWishFailure = (err) => {
    return {
        type: "DELETE_WISH_FAILURE",
        payload: err
    }
}

export const patchWishRequest = () => {
    return {
        type: "PATCH_WISH_REQUEST"
    }
}

export const patchWishSuccess = () => {
    return {
        type: "PATCH_WISH_SUCCESS"
    }
}

export const patchWishFailure = (err) => {
    return {
        type: "PATCH_WISH_FAILURE",
        payload: err
    }
}

export const postWishData = payload => dispatch => {
    dispatch( postWishRequest() )

    return axios.post("https://masai-project.herokuapp.com/wihlist", payload )
    .then(res => {
        dispatch( postWishSuccess() )
        dispatch( getWishData() )
    })
    .catch(err=> {
        dispatch( postWishFailure() )
    })
}

export const patchWishData = (idx, sizex) => dispatch => {
    dispatch( patchWishRequest() )

    return axios.patch(`https://masai-project.herokuapp.com/wihlist/${idx}`, { selected_size: `${sizex}` } )
    .then(res => {
        dispatch( patchWishSuccess() )
        dispatch( getWishData() )
    })
    .catch(err=> {
        dispatch( patchWishFailure() )
    })
}

export const patchWishEmptySize = (idx) => dispatch => {
    dispatch( patchWishRequest() )

    return axios.patch(`https://masai-project.herokuapp.com/wihlist/${idx}`, { selected_size: "" } )
    .then(res => {
        dispatch( patchWishSuccess() )
        dispatch( getWishData() )
    })
    .catch(err=> {
        dispatch( patchWishFailure() )
    })
}

export const deleteWishData = (idx) => dispatch => {
    dispatch( deleteWishRequest() )

    return axios.delete(`https://masai-project.herokuapp.com/wihlist/${idx}` )
    .then(res => {
        dispatch( deleteWishSuccess() )
        dispatch( getWishData() )
    })
    .catch(err=> {
        dispatch( deleteWishFailure() )
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

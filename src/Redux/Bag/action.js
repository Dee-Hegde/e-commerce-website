import axios from "axios";

export const postBagRequest = () => {
    return {
        type: "POST_BAG_REQUEST"
    }
}

export const postBagSuccess = () => {
    return {
        type: "POST_BAG_SUCCESS"
    }
}

export const postBagFailure = (err) => {
    return {
        type: "POST_BAG_FAILURE",
        payload: err
    }
}

export const getBagRequest = () => {
    return {
        type: "GET_BAG_REQUEST"
    }
}

export const getBagSuccess = (payload) => {
    return {
        type: "GET_BAG_SUCCESS",
        payload
    }
}

export const getBagFailure = (err) => {
    return {
        type: "GET_BAG_FAILURE",
        payload: err
    }
}

export const deleteBagRequest = () => {
    return {
        type: "DELETE_BAG_REQUEST"
    }
}

export const deleteBagSuccess = () => {
    return {
        type: "DELETE_BAG_SUCCESS"
    }
}

export const deleteBagFailure = (err) => {
    return {
        type: "DELETE_BAG_FAILURE",
        payload: err
    }
}

export const patchBagRequest = () => {
    return {
        type: "PATCH_BAG_REQUEST"
    }
}

export const patchBagSuccess = () => {
    return {
        type: "PATCH_BAG_SUCCESS"
    }
}

export const patchBagFailure = (err) => {
    return {
        type: "PATCH_BAG_FAILURE",
        payload: err
    }
}

export const postBagData = payload => dispatch => {
    dispatch( postBagRequest() )

    return axios.post("https://masai-project.herokuapp.com/bag", payload )
    .then(res => {
        dispatch( postBagSuccess() )
        dispatch( getBagData() )
    })
    .catch(err=> {
        dispatch( postBagFailure() )
    })
}

export const patchBagData = (clickedId, isQtySame) => dispatch => {
    dispatch( patchBagRequest() )

    return axios.patch(`https://masai-project.herokuapp.com/bag/${clickedId}`, { quantity: `${isQtySame}` } )
    .then(res => {
        dispatch( patchBagSuccess() )
        dispatch( getBagData() )
    })
    .catch(err=> {
        dispatch( patchBagFailure() )
    })
}

export const patchBagSizesData = (clickedSizesId, isSizesSame) => dispatch => {
    dispatch( patchBagRequest() )

    return axios.patch(`https://masai-project.herokuapp.com/bag/${clickedSizesId}`, { selected_size: `${isSizesSame}` } )
    .then(res => {
        dispatch( patchBagSuccess() )
        dispatch( getBagData() )
    })
    .catch(err=> {
        dispatch( patchBagFailure() )
    })
}

export const deleteBagData = (idx) => dispatch => {
    dispatch( deleteBagRequest() )

    return axios.delete(`https://masai-project.herokuapp.com/bag/${idx}` )
    .then(res => {
        dispatch( deleteBagSuccess() )
        dispatch( getBagData() )
    })
    .catch(err=> {
        dispatch( deleteBagFailure() )
    })
}

export const getBagData = payload => dispatch => {
    dispatch( getBagRequest() )

    return axios.get("https://masai-project.herokuapp.com/bag", payload )
    .then(res => {
        dispatch( getBagSuccess(res.data) )
    })
    .catch(err=> {
        dispatch( getBagFailure() )
    })
}

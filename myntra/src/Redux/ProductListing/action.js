import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actionType"
import Axios from "axios"


const axios = Axios.create({
    baseURL:"https://masai-project.herokuapp.com"
})


const getDataRequest = () => {
    return {
        type : GET_DATA_REQUEST
    }
}

const getDataSuccess = (payload) => {
    return {
        type : GET_DATA_SUCCESS,
        payload
    }
}

const getDataFailure = (error) => {
    return {
        type : GET_DATA_FAILURE,
        payload : error
    }
}

const getData = (payload) => (dispatch) => {
    dispatch(getDataRequest())

    const config = {
        url:"/product_data",
        method : "get"
    }

    return axios(config)
    .then((res) => {
        dispatch(getDataSuccess(res.data))
        console.log(res.data)
    })
    .catch((err) => {
        dispatch(getDataFailure(err));
    })
}



export {getDataRequest, getDataSuccess, getDataFailure, getData}
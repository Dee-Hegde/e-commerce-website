import { GET_DATA_FAILURE, GET_DATA_FILTER, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actionType"
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

const getDataFilterSuccess = (payload) => {
    return {
        type : GET_DATA_FILTER,
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
        method : "get",
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

const getDataFilterBySort = (page, sort, order) => (dispatch) => {
    dispatch(getDataRequest())

    const config = {
        url:"/product_data",
        method : "get",
        params : {
            _page : page,
            _limit : 50,
            _sort : sort,
            _order : order
        }
    }

    return axios(config)
    .then((res) => {
        dispatch(getDataFilterSuccess(res.data))
        console.log(res.data)
    })
    .catch((err) => {
        dispatch(getDataFailure(err))
    })
}

const getDataFilterByType = (page) => (dispatch) => {
    dispatch(getDataRequest())

    const config = {
        url:"/product_data",
        method : "get",
        params : {
            _page : page,
            _limit : 50,
            type_like : "NEW SEASON",
            type_like : "NEW"
        }
    }

    return axios(config)
    .then((res) => {
        dispatch(getDataFilterSuccess(res.data))
        console.log(res.data)
    })
    .catch((err) => {
        dispatch(getDataFailure(err))
    })
}


export {getDataRequest, getDataSuccess, getDataFailure, getData, getDataFilterBySort, getDataFilterSuccess, getDataFilterByType}
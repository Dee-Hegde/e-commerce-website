import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "./ActionType"


const loginRequest=()=>{
    return{
        type:LOGIN_REQUEST
    }
}
const loginSuccess=(payload)=>{
    return{
        type:LOGIN_SUCCESS,
        payload,
    }
}
const loginFail=()=>{
    return{
        type:LOGIN_FAIL
    }
}
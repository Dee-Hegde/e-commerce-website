import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "./ActionType"


const loginstate={
    isLoading:false,
    isError:false,
    isAuth:false,
    isReg:false,
    username:"",
    cardnumber:"",
    phoneNumber:""
}

export const loginReducer=(state=loginstate,{type,payload})=>{
    switch(type){
        case LOGIN_REQUEST:
            return{
                ...state, 
                isLoading:true
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                isLoading:false,
                isAuth:true,
            }
        case LOGIN_FAIL:
            return{
                ...state,
                isError:true,
                isLoading:false
            }
        default:
            return state
    }

}
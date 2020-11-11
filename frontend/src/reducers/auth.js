import {FAIL_TO_LOGIN,
     FAIL_TO_REGISTER,
     LOGIN_REQUEST_START,
      LOGIN_SUCCESS, 
      REGISTER_REQUEST_START, 
      REGISTER_SUCCESS} from '../action-types/auth'
const initSatate = {
    isLoading:false,
    isLogin:false , 
    error:''
}
export default function authReducer(state =initSatate, action){
    switch(action.type){
        case LOGIN_REQUEST_START:
            return{
                ...state,
                isLoading:action.payload

            }
        case LOGIN_SUCCESS:
            return{
                ...state, 
                userInfo:action.payload.user,
                isLogin:action.payload.isLogin,
                isLoading:action.payload.isLoading
            }
        case FAIL_TO_LOGIN:
            return{
                ...state, 
                error:action.payload,
            }  
        case REGISTER_REQUEST_START:
            return{
                ...state,
                isLoading:action.payload

            }     
        case REGISTER_SUCCESS:
            return{
                ...state, 
                user:action.payload
            };
        case FAIL_TO_REGISTER:
            return{
                ...state, 
                error:action.payload
            }    
        default:
            return state;    

    }
}
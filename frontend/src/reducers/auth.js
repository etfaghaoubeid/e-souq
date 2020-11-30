import{
    FAIL_TO_GET_PROFILE,
    FAIL_TO_LOGIN,
    FAIL_TO_REGISTER,
    FAIL_TO_UPDATE_PROFILE,
    GET_PROFILE_REQUEST_START,
    GET_PROFILE_SUCCESS,
    LOGIN_REQUEST_START,
    LOGIN_SUCCESS, 
    LOGOUT, 
    REGISTER_REQUEST_START, 
    REGISTER_SUCCESS,
    UPDATE_PROFILE_REQUEST_START,
    UPDATE_PROFILE_SUCCESS
} from '../action-types/auth'

export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_REQUEST_START:
            return {
                ...state,
                isLoading: true,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                userInfo: action.payload.userInfo,
                isLogin: action.payload.isLogin,
                isLoading: action.payload.isLoading
            }
        case FAIL_TO_LOGIN:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                error: action.payload.error,
            }
        case LOGOUT:
            return{
                ...state, 
                isLogin:action.payload.isLogin,
                userInfo:null
            } 
        default:
            return state;
    }
};
export const registerReducer = (state = {}, action) => {
    switch (action.type) {
        
        case REGISTER_REQUEST_START:
            return{
                ...state,
                isLoading:action.payload

            }     
        case REGISTER_SUCCESS:
            return{
                ...state, 
                userInfo:action.payload.userInfo,
                isLoading:action.payload.isLoading
            };
        case FAIL_TO_REGISTER:
            return{
                ...state, 
                isLoading:action.payload.isLoading,
                error:action.payload.error
            }  
        default:
            return state;
    }
}
export const profileReducer = (state = {}, action) => {
    switch (action.type) {
        
        case UPDATE_PROFILE_REQUEST_START:
            return {
                ...state,
                isLoading:action.payload
            }
        case UPDATE_PROFILE_SUCCESS:
            return { 
                ...state, 
                user: action.payload.userInfo,
                success:action.payload.success,
                isLoading:action.payload.isLogin
            }
        case FAIL_TO_UPDATE_PROFILE:
            return {
                ...state, 
                error: action.payload.error,
                isLoading:action.payload.isLoading
            }
        default:
            return state;
    }
}
export const profileDetailsReducer = (state = {user:{}}, action) => {
    switch (action.type) {
        
        case GET_PROFILE_REQUEST_START:
            return {
                ...state,
                isLoading:action.payload
            }
        case GET_PROFILE_SUCCESS:
            return { 
                ...state, 
                user: action.payload.user,
                isLoading:action.payload.isLoading
            }
        case FAIL_TO_GET_PROFILE:
            return {
                ...state, 
                error: action.payload.error,
                isLoading:action.payload.isLoading
            }   
        default:
            return state
    }
}

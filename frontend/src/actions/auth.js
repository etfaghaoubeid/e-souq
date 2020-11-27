import {LOGIN_SUCCESS, FAIL_TO_LOGIN, LOGIN_REQUEST_START, REGISTER_REQUEST_START, REGISTER_SUCCESS, FAIL_TO_REGISTER, LOGOUT, UPDATE_PROFILE_REQUEST_START, UPDATE_PROFILE_SUCCESS, FAIL_TO_UPDATE_PROFILE, GET_PROFILE_REQUEST_START, GET_PROFILE_SUCCESS, FAIL_TO_GET_PROFILE} from '../action-types/auth'
import { deleteLoacalStorageItem, setLocalStorageItem, updateLocalStorageItem } from '../utils/localStorage';
export const login= (user)=> async (dispatch)=>{
    dispatch({type:LOGIN_REQUEST_START, payload:true})
    const requestOption = {
        method:'POST', 
        headers:{'Content-type':'application/json'}, 
        body:JSON.stringify(user)
    }
    const res = await fetch('http://localhost:3333/user/login', requestOption);
    const data = await res.json();
    if(data && data.name){
        setLocalStorageItem(data, 'userInfo');
        console.log(data, 'userinfo for login')
        return dispatch({
            type:LOGIN_SUCCESS, 
            payload:{userInfo:data , isLogin:true,isLoding:false}
        })
    }
    return dispatch({
        type:FAIL_TO_LOGIN,
        payload: {
            isLoading: false,
            isLogin:false,
            error:data.message
        }

    })
    
}
export const register = (user)=>{
    return async (dispatch)=>{
        dispatch({
            type:REGISTER_REQUEST_START, 
            payload:true,
        });
        const configRequest = {
            method:'POST', 
            headers:{
                'Content-type':'application/json'
            }, 
            body:JSON.stringify(user)

        }
        const res = await fetch('http://localhost:3333/user/register', configRequest);
        const data = await res.json();
        if(data && data.name){
            setLocalStorageItem(data, 'userInfo')
            dispatch({
                type: LOGIN_SUCCESS, 
                payload: {userInfo:data , isLogin:true,isLoding:false}
                    
            })
            return dispatch({
                type: REGISTER_SUCCESS,
                payload: {
                    userInfo: data,
                    isLoading: false
                }
            });
            
        }
        return dispatch({
            type:FAIL_TO_REGISTER, 
            payload:{
                error:data.message, 
                isLoading:false
            }
        })

    }
}
export const getProfile = (_id) => async (dispatch, getState) => {
    dispatch({
        type: GET_PROFILE_REQUEST_START,
        isLoading: true
    });
    const { auth: { userInfo } } = getState();
    const configOption = {
        method:'GET', 
        headers:{
            'Content-type':'application/json',
            'Authorization':`Bearer ${userInfo.token}`
        },
    }
    const data = await fetch(`http://localhost:3333/user/${_id}`, configOption);
    const res = await data.json();
    if (data && data.name) {
       return dispatch({
            type: GET_PROFILE_SUCCESS,
            payload: {
                isLoading: false, 
                userInfo:data
    
            }
        })
    }
    dispatch({
        type: FAIL_TO_GET_PROFILE,
        payload: {
            error: data.message, 
            isLoading:false
        }
    })


}
export const updateProfile = (user)=>{
    return async (dispatch )=>{
        dispatch({
            type:UPDATE_PROFILE_REQUEST_START,
            payload:true,
        });
        const configOption = {
            method:'PUT', 
            headers:{
                'Content-type':'application/json',
                'Authorization':`Bearer ${user.token}`
            },
            body: JSON.stringify(user)
        }
       
        const res = await fetch('http://localhost:3333/user/profile', configOption);
        const data = await res.json();
        if (data && data.name) {
            console.log(data , 'update profile reducers')
             updateLocalStorageItem(data, 'userInfo');
           return  dispatch({
                type:UPDATE_PROFILE_SUCCESS,
               payload: {
                   userInfo: data,
                   isLoading:false
                }
            });
        }
        return dispatch({
            type:FAIL_TO_UPDATE_PROFILE,
            payload:{
                error:data.message, 
                isLoading:false
            }
        })


    }
}
export const logout = ()=>{
    deleteLoacalStorageItem('userInfo')
    return{
        type:LOGOUT,
        payload:{
            isLogin:false,
            userInfo:{}
        }
    }
}
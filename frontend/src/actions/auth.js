import {LOGIN_SUCCESS, FAIL_TO_LOGIN, LOGIN_REQUEST_START, REGISTER_REQUEST_START, REGISTER_SUCCESS, FAIL_TO_REGISTER, LOGOUT, UPDATE_PROFILE_REQUEST_START, UPDATE_PROFILE_SUCCESS, FAIL_TO_UPDATE_PROFILE} from '../action-types/auth'
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
        return dispatch({
            type:LOGIN_SUCCESS, 
            payload:{user:data , isLogin:true,isLoding:false}
        })
    }
    return dispatch({
        type:FAIL_TO_LOGIN,
        payload:data

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
            setLocalStorageItem(data , 'user')
             return dispatch({
                type:REGISTER_SUCCESS, 
                payload:{
                    user:data, 
                    isLoading:false
                }
            })
        }
        return dispatch({
            type:FAIL_TO_REGISTER, 
            payload:{
                error:data, 
                isLoading:false
            }
        })

    }
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
            body:JSON.stringify(user)
        }
        const res = await fetch('http://localhost:3333/user/profile', configOption);
        const data = await res.json();
        if(data&&data.name){
            updateLocalStorageItem('user' , data)
           return  dispatch({
                type:UPDATE_PROFILE_SUCCESS,
                payload:true,
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
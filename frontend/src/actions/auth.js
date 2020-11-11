import {LOGIN_SUCCESS, FAIL_TO_LOGIN, LOGIN_REQUEST_START, REGISTER_REQUEST_START, REGISTER_SUCCESS, FAIL_TO_REGISTER} from '../action-types/auth'
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
        localStorage.setItem('user', JSON.stringify(data))
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
        console.log(data , ' register actions')
        if(data && data.name){
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
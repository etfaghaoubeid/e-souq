import {LOGIN_SUCCESS, FAIL_TO_LOGIN, LOGIN_REQUEST_START} from '../action-types/auth'
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
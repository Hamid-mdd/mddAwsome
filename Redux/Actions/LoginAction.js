 export function  LoginSuccess (data)
{
    return{
        type:"LOGIN_SUCCESS",
        payload: {
            data: data,    
        }     
    }
}

export function  LoginFailure (data)
{
    return{
        type:"LOGIN_FAILURE",
 
    }
}

export function  LoginUserRequest (data)
{
    return{
        type:"LOGIN_REQUEST",
        payload: {
            data: data,    
        }     
    }
}






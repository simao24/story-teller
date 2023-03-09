import axios from "axios"

export const removeToken = function(){
    return localStorage.removeItem('token')
}

export const setToken = function(token){
    return localStorage.setItem('token', token)
}
function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}
export const getToken = function(){
    return localStorage.getItem('token')
}

export const getTokenData = function(){
    let token = getToken();
    if(token) return parseJwt(token)
}

export const getAPI = function(){
    let token = getToken()
    let headers = {}

    if(token){
        headers.Authorization = `Bearer ${token}`
    }

    return axios.create({
        baseURL: 'https://w5sbygse.directus.app/',
        //baseURL: 'http://woocrush.fr:8055/',
        headers
    })
}

export const updateToken = function() {
    setInterval(function(){
        
    },10000) 
}


export const getInformation = function() {
   

}


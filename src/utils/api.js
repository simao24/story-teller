import axios from "axios"

export const removeToken = function(){
    return localStorage.removeItem('token')
}

export const setToken = function(token){
    return localStorage.setItem('token', token)
}

export const getToken = function(){
    return localStorage.getItem('token')
}

export const getAPI = function(){
    let token = getToken()
    let headers = {}

    if(token){
        headers.Authorization = `Bearer ${token}`
    }

    return axios.create({
        baseURL: 'https://w5sbygse.directus.app/',
        headers: headers
    })
}

export const getInformation = function() {
   

}
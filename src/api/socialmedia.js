import API from "./api"
import {Social } from "./endpoints"


export const getAllSocial = ()=>{
    return API.get(`${Social}`)
}
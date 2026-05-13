import API from "./api"
import {Menu } from "./endpoints"


export const getAllHeader = ()=>{
    return API.get(`${Menu}`)
}
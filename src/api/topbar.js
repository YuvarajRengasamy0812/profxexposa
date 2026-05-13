import API from "./api"
import {TopBar } from "./endpoints"


export const getAllTopBar = ()=>{
    return API.get(`${TopBar}`)
}
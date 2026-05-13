import API from "./api"
import {Style } from "./endpoints"

export const getAllLog = ()=>{
    return API.get(`${Style}`)
}
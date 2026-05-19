import API from "./api"
import {sponsersbrochure } from "./endpoints"


export const getsponsersbrochure = ()=>{
    return API.get(`${sponsersbrochure}`)
}
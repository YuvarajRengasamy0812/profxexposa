import API from "./api"
import {brochure } from "./endpoints"


export const getBrochure = ()=>{
    return API.get(`${brochure}`)
}
import API from "./api"
import {mediapartners } from "./endpoints"


export const getAllMediaPartners = ()=>{
    return API.get(`${mediapartners}`)
}
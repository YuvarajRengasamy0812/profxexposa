import API from "./api"
import {TrustedPartners } from "./endpoints"


export const getAllTrustedPartners = ()=>{
    return API.get(`${TrustedPartners}`)
}
import API from "./api"
import {Sponsors } from "./endpoints"

export const getAllSponsors = ()=>{
    return API.get(`${Sponsors}`)
}
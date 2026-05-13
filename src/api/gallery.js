import API from "./api"
import {Gallery } from "./endpoints"

export const getAllGallery = ()=>{
    return API.get(`${Gallery}`)
}
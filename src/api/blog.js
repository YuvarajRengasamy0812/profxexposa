import API from "./api"
import {Blog } from "./endpoints"

export const getAllBlog = ()=>{
    return API.get(`${Blog}`)
}
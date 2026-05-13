import API from "./api"
import {Countdown } from "./endpoints"


export const getAllCountdown = ()=>{
    return API.get(`${Countdown}`)
}
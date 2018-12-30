import * as actionTypes from "../constants"
export function initiCity(city){
    return {
        type:actionTypes.CITYNAME,
        city
    }
}
export function updateCity(city){
    return {
        type:actionTypes.UPDATE_CITYNAME,
        city
    }
}
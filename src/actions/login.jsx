import * as actionTypes from "../constants"
export function userInfo(username){
    return {
        type:actionTypes.USERNAME,
        username
    }
}

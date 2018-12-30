import * as actionTypes from "../constants"
export function initUrl(url){
    return {
        type:actionTypes.INITURL,
        url
    }
}
export function upDateUrl(url){
   return {
       type:actionTypes.UPDATEURL,
       url
   }
}
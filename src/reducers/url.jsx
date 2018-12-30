import * as actionTypes from "../constants"
const initialState = {}
export default function getUrl(state=initialState,actions){
    switch(actions.type){
        case actionTypes.INITURL:
        return state = actions.url;
        case actionTypes.UPDATEURL:
        return state = actions.url;
        default:
        return state;
    }
}
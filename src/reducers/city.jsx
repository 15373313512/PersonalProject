import * as actionTypes from "../constants"
const initialState = {}
export default function city(state=initialState,actions){
    switch(actions.type){
        case actionTypes.CITYNAME:
        return state = actions.city;
        case actionTypes.UPDATE_CITYNAME:
        return state = actions.city;
        default:
        return state;
    }
}
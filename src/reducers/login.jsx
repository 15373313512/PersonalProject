import * as actionTypes from "../constants"
const initialState = {}
export default function userIno(state=initialState,actions){
    switch(actions.type){
        case actionTypes.USERNAME:
        return state = actions.username;
        default:
        return state;
    }
}
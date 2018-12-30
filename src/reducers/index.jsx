import {combineReducers} from 'redux'
import city from "./city.jsx"
import userInfo from './login.jsx'
import getUrl from './url.jsx'
const RooterReducer = combineReducers({
    city,
    userInfo,
    getUrl
})
export default RooterReducer;
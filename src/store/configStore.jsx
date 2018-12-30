
//管理reducer的入口

import {createStore } from 'redux'
import RooterReducer from "../reducers"

export default function configStore(){
    const store = createStore(RooterReducer,
        window.devToolsExtension ? window.devToolsExtension() : undefined);
        return store;
}
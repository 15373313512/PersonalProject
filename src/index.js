import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter'
import "./static/css/common.less"
import "./static/css/font.css"
import "./static/css/iconfont.css"
//引入将react与redux关联的包
import {Provider} from "react-redux"

//引入store
import configStore from "./store/configStore"
const store = configStore();


ReactDOM.render(
    <Provider store={store}>
        <AppRouter/>
    </Provider>,document.getElementById('root'))

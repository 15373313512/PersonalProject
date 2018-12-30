import React from 'react';
import {Route,BrowserRouter} from 'react-router-dom'
import App from '../../container/app.js'
import SubRouter from '../SubRouter'

export default class AppRouter extends React.Component{
    render(){
       return(
       <BrowserRouter>
            <App>
                <Route path="/" component={SubRouter}></Route>
            </App>
        </BrowserRouter>
       )
    }
}
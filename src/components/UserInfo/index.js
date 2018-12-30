import React from 'react';
import './style.less'

export default class UserInfo extends React.Component{
    render(){
      let cityName = this.props.cityName
      let username = this.props.userName
       return(
         <div className="userinfo-container">
            <p>
               <i className="icon-user"></i>
               &nbsp;
               <span>{username}</span>
            </p>
            <p>
               <i className="icon-map-marker"></i>
               &nbsp;
               <span>{cityName}</span>
            </p>
         </div>
       )
    }
}


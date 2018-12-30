import React from 'react';
import {NavLink} from 'react-router-dom'
import './style.less'

export default class FooterNav extends React.Component{
    render(){
       return(
        <div className="nav-footer">
            <ul className="clear-fix">
                <li>
                    <NavLink to="/home">
                            <i className="iconfont icon-home"></i>
                            <span>首页</span>
                    </NavLink>
                </li>

                 <li>
                    <NavLink to="/shop">
                            <i className="iconfont icon-shop"></i>
                            <span>商城</span>
                    </NavLink>
                </li>

                 <li>
                    <NavLink to="/life">
                            <i className="iconfont icon-trophy"></i>
                            <span>生活服务</span>
                    </NavLink>
                </li>

                 <li>
                    <NavLink to="/mine">
                            <i className="iconfont icon-team"></i>
                            <span>我的</span>
                    </NavLink>
                </li>
            </ul>
        </div>
       )
    }
}
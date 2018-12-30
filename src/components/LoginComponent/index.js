
//登录页面的组件
import React from 'react';
import './style.less'
export default class LoginComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            userName: ''
        }
    }
    getUserName(event){
        // onChange() 事件在react中实现了实时响应,只要发生改变就触发

        // event.target.value 可以实时获取到改变的值
        // console.log(event.target.value)
        this.setState({
            userName: event.target.value
        })
    }

    //点击登录函数
    sendUserName(){
        const router = this.props.router
        
        var onDataHender = this.props.onDataHender;
        onDataHender(this.state.userName)
        //点击登录,跳转到上一个页面
        this.props.history.push('/'+decodeURIComponent(router))
        
    }
    
    render(){
       return(
        <div id="login-container">
            <div className="input-container phone-container">
                <i className="icon-tablet"></i>
                <input
                    type="text"
                    placeholder="输入手机号" 
                    onChange={this.getUserName.bind(this)}
                    />
            </div>
            <div className="input-container password-container">
                <i className="icon-key"></i>
                <button>发送验证码</button>
                <input type="text" placeholder="输入验证码" />
            </div>
            <button className="btn-login" onClick={this.sendUserName.bind(this)}>登录</button>
        </div>
       )
    }
}
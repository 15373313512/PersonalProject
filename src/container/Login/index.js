import React from 'react';
import CommonHeader from '../../components/CommonHeader'
import LoginComponent from '../../components/LoginComponent'
//组件关联redux
import {connect} from 'react-redux'
//引入action
import * as loginActions from '../../actions/login'
//操作action
import {bindActionCreators} from 'redux'
//引入配置文件
import {USERNAME} from '../../utils/config'
import {withRouter} from "react-router-dom"


class Login extends React.Component{
   getDataHander(userName){
      this.props.loginActions.userInfo({
         userName: userName
      })
      localStorage.setItem(USERNAME,userName)
   }

    render(){
      // console.log(this.props.url)
      var router = this.props.match.params.router
      console.log(router)
       return(
          
          <div>
             <CommonHeader title="登录页面" url={this.props.url.url} history={this.props.history}/>
             <LoginComponent onDataHender={this.getDataHander.bind(this)} history={this.props.history} router={router}/>
          </div>
       )
    }
}

// -------------------redux部分----------------------------

//读取
function mapStateToProps(state){
   return {
       userInfo: state.userInfo,
       url: state.getUrl
   }
}

//写入

function mapDispatchToProps(dispatch){
   return {
       loginActions: bindActionCreators(loginActions,dispatch)
   }
 }

 //路由的connect绑定redux需要使用到 withRouter
 export default withRouter(connect(
   //将读取与写入的方法写进来,并且先读取,后写入,顺序不能换
   mapStateToProps,
   mapDispatchToProps
)(Login))
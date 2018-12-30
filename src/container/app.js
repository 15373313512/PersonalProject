import React from 'react';
import {withRouter} from "react-router-dom"

//组件关联redux
import {connect} from 'react-redux'
//引入action
import * as cityActions from '../actions/city'
import * as loginActions from '../actions/login'
import * as urlActions from '../actions/url'
//操作action
import {bindActionCreators} from 'redux'

//引入配置文件
import {CITYNAME,USERNAME} from '../utils/config'

 class App extends React.Component{

    //初始化城市(判断本地是否有存储,如果有,则使用存储的值,没有则使用默认值)
    componentDidMount(){
        var cityName = localStorage.getItem(CITYNAME)
        var userName = localStorage.getItem(USERNAME)
        
        if(cityName){
            this.props.cityActions.initiCity({
                cityName: cityName
            })
        }else{
            //初始化默认值，如果本地存储里没有，则初始化加载北京的数据
            localStorage.setItem(CITYNAME,'北京')
            this.props.cityActions.initiCity({
                cityName: '北京'
            }) 
        }


        //初始化userName
        if(userName){
            this.props.loginActions.userInfo({
                userName: userName
            })
        }

        //初始化url
        this.props.urlActions.initUrl({
            url:'/home'
        })


       
    }

    render(){
        console.log(this.props.url.url)
       return(
       <div>
           {this.props.children}
        </div>
       )
    }
}


// -------------------redux部分----------------------------

//读取
function mapStateToProps(state){
    return {
        city: state.city,
        userInfo: state.userInfo,
        url:state.getUrl
    }
}

//写入

function mapDispatchToProps(dispatch){
    return {
        cityActions: bindActionCreators(cityActions,dispatch),
        loginActions: bindActionCreators(loginActions,dispatch),
        urlActions: bindActionCreators(urlActions,dispatch)
    }
  }

  //路由的connect绑定redux需要使用到 withRouter
  export default withRouter(connect(
    //将读取与写入的方法写进来,并且先读取,后写入,顺序不能换
    mapStateToProps,
    mapDispatchToProps
)(App))
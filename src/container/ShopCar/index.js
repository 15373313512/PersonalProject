import React from 'react';
import ShopCarList from './subpage/ShopCarList'
import CommonHeader from '../../components/CommonHeader'
import UserInfo from '../../components/UserInfo'
import {withRouter} from "react-router-dom"

//组件关联redux
import {connect} from 'react-redux'
class ShopCar extends React.Component{
    render(){
       return(
       <div>
          <CommonHeader title="购物车" history={this.props.history} url={this.props.url.url}/>
          <UserInfo cityName={this.props.city.cityName} userName={this.props.userInfo.userName}/>
           <ShopCarList/>
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
       url: state.getUrl
   }
}

//写入

function mapDispatchToProps(dispatch){
   return {
      
   }
 }

 //路由的connect绑定redux需要使用到 withRouter
 export default withRouter(connect(
   //将读取与写入的方法写进来,并且先读取,后写入,顺序不能换
   mapStateToProps,
   mapDispatchToProps
)(ShopCar))
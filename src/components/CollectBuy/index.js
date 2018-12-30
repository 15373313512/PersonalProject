import React from 'react';
import './style.less'
import {withRouter} from "react-router-dom"

//组件关联redux
import {connect} from 'react-redux'
class CollectBuy extends React.Component{

  //收藏函数
  collectHender(){
    let isLoad = this.props.userInfo.userName
    if(isLoad){
      //登录了
      console.log('已收藏')
    }else{
      //未登录
      let houseId = this.props.houseId
      this.props.history.push('/login/'+encodeURIComponent("detail/" + houseId))
    }  
  }

  //预定函数
  buyHender(){
    let isLoad = this.props.userInfo.userName
    if(isLoad){
      //登录了
      console.log('已购买')
    }else{
      //未登录
      this.props.history.push('/login')
    }
  }
    render(){
       return(
        <div className="buy-store-container clear-fix">
          <div className="item-container float-left">
            <button onClick={this.collectHender.bind(this)}>收藏</button>
          </div>
          <div className="item-container float-right">
            <button onClick={this.buyHender.bind(this)}>预定</button>
          </div>
        </div>
       )
    }
}
// -------------------redux部分----------------------------

//读取
function mapStateToProps(state){
  return {
      userInfo: state.userInfo
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
)(CollectBuy))
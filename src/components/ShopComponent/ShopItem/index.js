import React from 'react';
import './style.less'
import {Link} from 'react-router-dom'
import * as urlActions from '../../../actions/url'
import {withRouter} from "react-router-dom"
//操作action
import {bindActionCreators} from 'redux'

//组件关联redux
import {connect} from 'react-redux'
class ShopComponent extends React.Component{

  //去往详情页面,修改redux的值
  toDetailHandler(){
    let url = this.props.match.url
    //存储在redux上
    this.props.urlActions.upDateUrl({
      url: url
  })
  }
    render(){
      console.log(this.props.match.url)
        let itemData = this.props.itemData
        let id= itemData.id
       return(
        <div className="list-item" onClick={this.toDetailHandler.bind(this)}>
          <Link to={`/detail/${id}`}>
            <img src={ itemData.img } alt=""/>
            <div className="mask">
              <div className="left">
                <p>{ itemData.title }</p>
                <p>{ itemData.houseType }</p>
              </div>
              <div className="right">
                <div className="btn">
                  { itemData.rentType }
                </div>
                <p>{ itemData.price }/月</p>
              </div>
            </div>
          </Link>
        </div>
       )
    }
}

// -------------------redux部分----------------------------

//读取
function mapStateToProps(state){
  return {
      url:state.getUrl
  }
}

//写入

function mapDispatchToProps(dispatch){
  return {
      urlActions: bindActionCreators(urlActions,dispatch)
  }
}

//路由的connect绑定redux需要使用到 withRouter
export default withRouter(connect(
  //将读取与写入的方法写进来,并且先读取,后写入,顺序不能换
  mapStateToProps,
  mapDispatchToProps
)(ShopComponent))
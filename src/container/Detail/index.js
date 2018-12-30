import React from 'react';
import CommonHeader from '../../components/CommonHeader'
import HouseInfo from './subpage/HouseInfo'
import {withRouter} from "react-router-dom"
//组件关联redux
import {connect} from 'react-redux'
class Detail extends React.Component{
    render(){
       const houseId = this.props.match.params.id
       const url = this.props.url.url
       return(
       <div>
         <CommonHeader title="详情页" url={url} history={this.props.history}/>
          <HouseInfo houseId={houseId}  history={this.props.history}/>
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
     
  }
}

//路由的connect绑定redux需要使用到 withRouter
export default withRouter(connect(
  //将读取与写入的方法写进来,并且先读取,后写入,顺序不能换
  mapStateToProps,
  mapDispatchToProps
)(Detail))
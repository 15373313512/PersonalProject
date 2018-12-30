import React from 'react';
import CommonHeader from '../../components/CommonHeader'
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'
//引入配置文件
import {CITYNAME} from '../../utils/config'

import {withRouter} from "react-router-dom"
//引入action
import * as cityActions from '../../actions/city'
//操作action
import {bindActionCreators} from 'redux'

//组件关联redux
import {connect} from 'react-redux'


class City extends React.Component{

   //获取citylist中传递过来的城市名称,并修改state树上的存储
   getCityName(data){
      // console.log(data); //{element:"上海"}
      this.props.cityActions.updateCity({
            cityName: data.element
      })
      //将修改的值永久存储起来
      localStorage.setItem(CITYNAME,data.element);
   }
    render(){
       console.log(this.props.url.url)
       const url = this.props.url.url
       return(
       <div>
          <CommonHeader title="城市选择" url={url} history={this.props.history}/>
          <CurrentCity cityName={this.props.city.cityName}/>
          <CityList onClickHender={this.getCityName.bind(this)}/>
        </div>
       )
    }
}

// -------------------redux部分----------------------------

//读取
function mapStateToProps(state){
   return {
       city: state.city,
       url: state.getUrl
   }
}

//写入
function mapDispatchToProps(dispatch){
   return {
      cityActions: bindActionCreators(cityActions,dispatch)
   }
 }

export default withRouter(connect(
   mapStateToProps,
   mapDispatchToProps
)(City))
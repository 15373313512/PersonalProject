import React from 'react';
import FooterNav from '../../components/FooterNav'
import HomeHeader from '../../components/HomeHeader'
import Banner from '../../components/Banner'
import HomeHot from './subpage/HomeHot'

//引入图片
import Banner1 from '../../static/images/banner1.png'
import Banner2 from '../../static/images/banner2.png'
import Banner3 from '../../static/images/banner3.png'

import {withRouter} from "react-router-dom"

//组件关联redux
import {connect} from 'react-redux'


 class Home extends React.Component{
    render(){
        let bannerArr = [Banner1,Banner2,Banner3];
       console.log(bannerArr)
       return(
       <div>
           <HomeHeader cityName={this.props.city.cityName} history={this.props.history} userName={this.props.userInfo.userName}/>
           <Banner bannerArr={bannerArr}/>
           <HomeHot cityName={this.props.city.cityName}/>
           <FooterNav/>
        </div>
       )
    }
}

// -------------------redux部分----------------------------

//读取
function mapStateToProps(state){
    return {
        city: state.city,
        userInfo: state.userInfo
    }
}

//写入

function mapDispatchToProps(dispatch){
    return {
       
    }
  }
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Home))
import React from 'react';
import Banner from '../../components/Banner'
import FooterNav from '../../components/FooterNav'
import HomeHeader from '../../components/HomeHeader'
import Buttons from '../../components/Buttons'
import ShopList from './subpage/ShopList'

import Banner4 from '../../static/images/banner4.png'
import Banner5 from '../../static/images/banner5.png'
import Banner6 from '../../static/images/banner6.png'
//组件关联redux
import {connect} from 'react-redux'
import {withRouter} from "react-router-dom"


 class Shop extends React.Component{
    render(){
        const bannerArr = [Banner4,Banner5,Banner6]
       return(
       <div>
            <HomeHeader cityName={this.props.city.cityName} history={this.props.history} userName={this.props.userInfo.userName}/>
            <Banner bannerArr={bannerArr}/>
            <div className="btn-group" style={{ display: "flex",margin: "10px"}}>
                <Buttons buttonText="找室友"></Buttons>
                <Buttons buttonText="找房子"></Buttons>
            </div>
            <ShopList/>
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
)(Shop))
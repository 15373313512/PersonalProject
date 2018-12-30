import React from 'react';
import './style.less'
import {Link} from "react-router-dom"
import SearchInput from '../SearchInput/index'
import * as urlActions from '../../actions/url'
import {withRouter} from "react-router-dom"
//操作action
import {bindActionCreators} from 'redux'

//组件关联redux
import {connect} from 'react-redux'
class HomeHeader extends React.Component{

    //获取搜索框中输入的数据，并跳转到search页面，同时携带数据
    getSearchValue(searchValue){
        this.props.history.push('/search/'+searchValue)
    }
    //去登录页面
    toLoginHandler(){
        const isLoad = this.props.userName;
        let url = this.props.match.url;
        // 设置到redux上
        this.props.urlActions.upDateUrl({
            url: url
        })
        if(isLoad){
            //登录了,跳到购物车页面
            this.props.history.push('/shopcar')
        }else{
            //没登录,跳到登录页面
            this.props.history.push('/login/shopcar')
        }
    }

    //去城市页面,修改url
    toCityHandler(){
        let url = this.props.match.url
        //存入redux
        this.props.urlActions.upDateUrl({
            url: url
        })
    }
    render(){
       return(
       <div id="home-header" className="clear-fix" >
            <div className='home-header-left float-left' onClick={this.toCityHandler.bind(this)}>
                <Link to="/city">
                    <span>{this.props.cityName}</span>
                    <i className="icon-angle-down"></i>
                </Link>
            </div>

            <div className='home-header-right float-right' onClick={this.toLoginHandler.bind(this)}>
                <i className="iconfont icon-car"></i>
            </div>

            <div className='home-header-middle'>
                <div className="search-container">
                    <i className="icon-search"></i>
                    <SearchInput onSendValue={this.getSearchValue.bind(this)}/>
                </div>
            </div>
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
)(HomeHeader))

//搜索页面的头部导航

import React from 'react';
import './style.less'
import SearchInput from '../SearchInput/index'
export default class SearchHeader extends React.Component{
  
  //获取搜索框中的数据函数
  getSearchValue(searchValue){
    console.log(searchValue)
    //这里是跳转到search页面所携带的参数keywords的具体值
    this.props.history.push('/search/'+searchValue)
  }

  //返回事件
  clickHandle(){
  this.props.history.push('/home')
  }
    render(){
       return(
        <div id="search-header" className="clear-fix">
          <span className="back-icon float-left" onClick={this.clickHandle.bind(this)}>
              <i className="icon-chevron-left"></i>
          </span>
          <div className="input-container">
              <i className="icon-search"></i>
              <SearchInput onSendValue={this.getSearchValue.bind(this)}/>
          </div>
        </div>
       )
    }
}
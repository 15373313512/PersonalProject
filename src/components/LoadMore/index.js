
//加载更多的组件

import React from 'react';
import './style.less'
export default class LoadMore extends React.Component{

  componentDidMount(){
    const loadMoreData = this.props.loadMoreData;
    //这里使用ref获取原生dom
    const wrapper = this.refs.wrapper
    
    //获取整个可视窗口的高度
    const viewHeight = window.screen.height;

    let timer;
    //在回调函数里面获取元素距离上边的高度
    function callback(){
      //元素.getBoundingClientRect()方法获取的是元素距离视口的四边的距离,[上,右,下,左]
      let top = wrapper.getBoundingClientRect().top;

      //理解这个函数 getBoundingClientRect()
      
      // console.log(top)
      if(top && top < viewHeight){
        // this.props.loadMoreData(); //这里的this不是指这个组件
        loadMoreData();
        // console.log('hahaha')
      }
    }
      //滚动事件
    window.addEventListener('scroll',function(){
      if(timer){
        clearTimeout(timer)
      }
      timer = setTimeout(function(){
        callback();
      },50)
    })
  }

  
    render(){
       return(
        <div className="load-more" ref="wrapper">
         加载更多...
        </div>
       )
    }
}
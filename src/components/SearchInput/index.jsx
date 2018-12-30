
//专门用于头部的input搜索框的定义
import React from 'react';
import './style.less'

export default class SearchInput extends React.Component{
   constructor(){
      super();
      this.state = {
         value: ''
      }
   }
   KeyUpHandle(event){
      if(event.keyCode === 13){
         // 空格： 32
         // 回车： 13
         // a: 65
         // A: 16
         // tab: 有默认事件 9
         // 删除：8
         //当按回车键时跳转到search页面


         //不在这里做跳转,交给父级去做(在基础组件中只做视图渲染，不做业务逻辑)
         // this.props.history.push('/search/'+this.state.value)  //push()方法是在router的history中
         this.props.onSendValue(this.state.value)
      }
   }
   getInputValue(event){
      this.setState({
         // 获取input中的值的方法
         value: event.target.value
      })
   }
    render(){
       return(
            <input 
            className='search-input'
            type='text' 
            // onKeyUp: 键盘抬起事件
            onKeyUp={this.KeyUpHandle.bind(this)} 
            value={this.state.value}
            onChange={this.getInputValue.bind(this)}
            />
         
       )
    }
}
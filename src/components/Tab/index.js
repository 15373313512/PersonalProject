import React from 'react';
import './style.less'
export default class Tab extends React.Component{
  constructor(){
    super();
    this.state = {
      currentIdx: 0  //记录当前点击的下标
    }
  }
  //点击修改当前的下标值
  chickHander(index){
    // console.log(index) //获取的是子元素的index 0,1
    this.setState({
      currentIdx: index
    })
    
  }

  //设置高亮的函数
  currentClass(index){
    return this.state.currentIdx == index 
    ?
    'Tab_title active'
    :
    'Tab_title'
  }
  
  //内容切换的函数
  ItemClass(index){
    return this.state.currentIdx == index
    ?
    'Tab_item show'
    :
    'Tab_item'
  }
  render(){  
    return(
      //this.props.children方法返回的该组件中所包含的子元素
      //对于this.props.children的处理,有一个React.Children的方法,用于处理子元素的方法
      <div>
        {/* 头部按钮 */}
        <div className="Tab_title_wrap">
          {
            // React.Children.map 遍历子元素,第一个参数是:this.props.children,第二个参数是一个函数
            React.Children.map(this.props.children,(element,index) => {
              return(
                <div 
                className={this.currentClass(index)} 
                onClick={this.chickHander.bind(this,index)}
                >
                { element.props.tabname }
                </div>
              )
            })
          }
        </div>

        {/* 内容展示部分 */}
        <div className="Tab_item_wrap">
          {
            React.Children.map(this.props.children,(element,index) => {
              return(
                <div 
                  className={this.ItemClass(index)}
                >{element}</div>
              )
            }) 
          }
        </div>
      </div>

    )
  }
}
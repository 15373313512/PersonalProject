import React from 'react';
import './style.less'
export default class OrderItem extends React.Component{
   constructor(){
      super();
      this.state = {
         commentState: 0
      }
   }
   componentDidMount(){  
      this.setState({
         commentState:this.props.ItemData.commentState
      })
   }
   //点击评价函数
   commentHandler(){
      this.setState({
         commentState: 1
      })
   }
   //点击提交的函数
   submitHandler(){
      const myComment = this.refs.myComment
      if(myComment.value == ''){
         alert('评论内容不能为空')
      }else{
         this.setState({
            commentState: 2
         })
         alert('评论成功')
      } 
   }

   //点击取消按钮
   cancelhandler(){
      this.setState({
         commentState: 0
      })
   }
    render(){
      const ItemData = this.props.ItemData
       let commentState = this.state.commentState
       return(
         <div className="clear-fix order-item-container">
            <div className="order-item-img float-left">
               <img src={ItemData.img} />
            </div>
            <div className="order-item-comment float-right">
               {
                  commentState == 0
                  ?
                  <button className="btn" onClick={this.commentHandler.bind(this)}>评价</button>
                  :
                  commentState == 1
                  ?
                  ''  //放到下面做(为了符合老师的样式)
                  : 
                  <button className="btn unseleted-btn">已评价</button>
               }
               
            </div>
            <div className="order-item-content">
               <span>商户：{ItemData.title}</span>
               <span>类型：{ItemData.houseType}</span>
               <span>价格：￥{ItemData.price}</span>
            </div>
            {
               commentState == 1
               ?
               <div className="comment-text-container">
                  <textarea style={{ width: '100%', height: '80px' }} className="comment-text" ref='myComment'></textarea>
                  <button className="btn" onClick={this.submitHandler.bind(this)}>提交</button>
                  &nbsp;
                  <button className="btn unseleted-btn" onClick={this.cancelhandler.bind(this)}>取消</button>
               </div>
               :
               ''
            }
         </div>
       )
    }
}
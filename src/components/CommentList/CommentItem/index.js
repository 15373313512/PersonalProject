import React from 'react';
import './style.less'
export default class CommentList extends React.Component{
    render(){
      const commentItem = this.props.commentItem
       return(
        <div className="comment-item">
          <h3>
            <i className="icon-user"></i>
            &nbsp;
            {commentItem.username}
          </h3>
          <p>{commentItem.comment}</p> 
        </div>
       )
    }
}
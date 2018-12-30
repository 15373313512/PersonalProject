import React from 'react';
import CommentItem from './CommentItem'
export default class CommentList extends React.Component{
    render(){
        const commentData = this.props.commentData
       return(
        <div className="comment-list">
            {
              commentData.map((element,index) => {
                  return <CommentItem commentItem={element} key={index}/>
              })  
            }
        </div>
       )
    }
}
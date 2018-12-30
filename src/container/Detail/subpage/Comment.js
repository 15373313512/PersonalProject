
//该页面用于详情页请求数据

import React from 'react';
import {getComment} from '../../../fetch/detail'
import CommentList from '../../../components/CommentList';
import LocalMore from '../../../components/LoadMore'
export default class Comment extends React.Component{
    constructor(){
        super();
        this.state = {
            commentData: [],
            hasMore: false
        }
        
    }
    componentDidMount(){
        this.getCommentData()
    }
    //加载更多的函数
    loadMoreData(){
        this.getCommentData()
    }
    //请求数据的函数
    getCommentData(){
        let houseId = this.props.houseId
        var result = getComment(houseId);
        result.then((res) => {
            return res.json()
        })
        .then((data) => {
           this.setState({
            commentData: this.state.commentData.concat(data.data),
            hasMore:data.hasMore
           })
          
        })
    }
    render(){
        let {commentData,hasMore }= this.state
        
       return(
    
       <div>
           {
            commentData.length>0 
            ?
            <CommentList commentData={commentData}/>
            :
            <div>数据正在加载...</div>   
            }     
            {
                hasMore
                ?
                <LocalMore loadMoreData={this.loadMoreData.bind(this)}/>
                :
                <div>到底啦...</div>

            }
       </div>
       )
    }
}
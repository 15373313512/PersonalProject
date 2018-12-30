import React from 'react';
import './style.less'

export default class CommonHeader extends React.Component{
    clickHender(){
        //返回到Home页面
        const url = this.props.url
        console.log(this.props.url)
       this.props.history.push(url)
    }
    render(){
       return(
        <div id="common-header">
            <span className="back-icon" onClick={this.clickHender.bind(this)}>
                <i  className="icon-chevron-left"></i> 
            </span> 
            <h1>{this.props.title}</h1>

        </div>
       )
    }
}



import React from 'react';
import ReactSwipe from 'react-swipe';
import './style.less'



export default class Banner extends React.Component{
    constructor(){
        super();
        this.state = {
            circleIdx: 0
        }
    }
    render(){
        let bannerArr = this.props.bannerArr
        const opt = {
            auto: 3000,
            callback: function(index){
                this.setState({
                    circleIdx: index
                })
            }.bind(this)
        }
       return(     
       <div id="home-category">
            <ReactSwipe swipeOptions={ opt } > 
                {
                bannerArr.map((element,index) => {
                    return <img key={index} src={element}/>
                })
                }
            </ReactSwipe>
            {/* 小圆点 */}
            <div className="index-container">
                <ul>
                   {
                       bannerArr.map((element,index) => {
                           return <li key={index} className={this.state.circleIdx === index ? "selected" : ''}></li>
                       })
                   }
                </ul>
            </div>
           
        </div>
       )
    }
}
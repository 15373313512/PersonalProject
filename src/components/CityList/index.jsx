//热门城市列表组件
import React from 'react';
import './style.less'

export default class CityList extends React.Component{
    //热门城市点击事件
    clickHender(data){
        this.props.onClickHender(data)
    }
    render(){
        const hotCity = ["北京","上海","杭州","广州","苏州","深圳","南京","天津","重庆","厦门","武汉"]
       return(
        <div className="city-list-container">
            <h3>热门城市</h3>
            {
                hotCity.map((element,index) => {
                    return (
                    <li key={index}>
                        <span onClick={this.clickHender.bind(this,{element})}>{element}</span>
                    </li>
                    )
                })
            }
        </div>
       )
    }
}
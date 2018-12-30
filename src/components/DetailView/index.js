// 详情页的大组件
import React from 'react'
import Banner from '../Banner'
import Tab from '../Tab'
import Comment from '../../container/Detail/subpage/Comment'
import './style.less'

export default class DetailView extends React.Component{
    render(){
        const houseInfo = this.props.houseInfo
       return(
        <div className="detail-info">
         <Banner bannerArr={this.props.bannerArr}/>
         <Tab>
         <div tabname="房源信息">
            <h3>{ houseInfo.title }</h3>
            <div className="box">
            <ul>
                <li>
                    <span>{ houseInfo.price }/月</span>
                    <p>租金</p>
                </li>
                <li>
                    <span>{ houseInfo.info.type }/月</span>
                    <p>房型</p>
                </li>
                <li>
                    <span>{ houseInfo.houseType }</span>
                    <p>面积</p>
                </li>
            </ul>
            </div>
            <div className="info">
            <div className="info-list">
                <p>楼层：{ houseInfo.info.level }</p>
                <p>装修：{ houseInfo.info.style }</p>
            </div>
            <div className="info-list">
                <p>类型：{ houseInfo.info.type }</p>
                <p>朝向：{ houseInfo.info.orientation }</p>
            </div>
            <div className="info-list">
                <p>年代：{ houseInfo.info.years }</p>
            </div>
            </div>
                </div>
                <div tabname="房源评价">
                    <Comment houseId={this.props.houseId}/>
                </div>
         </Tab>
        </div>
       )
    }
}
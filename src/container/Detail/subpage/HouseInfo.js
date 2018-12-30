
//该页面用于详情页请求数据

import React from 'react';
import {getHouseInfo} from '../../../fetch/detail'
import DetailView from '../../../components/DetailView'
import CollectBuy from '../../../components/CollectBuy'
export default class HouseInfo extends React.Component{
    constructor(){
        super();
        this.state = {
            houseInfo: {}
        }
        
    }
    componentDidMount(){
        let houseId = this.props.houseId
        var result = getHouseInfo(houseId);
        result.then((res) => {
            return res.json()
        })
        .then((data) => {
           this.setState({
            houseInfo: data
           })
        })
    }
    render(){
        
        let houseInfo = this.state.houseInfo
        
       return(
    
       <div>
           {
                Object.keys(houseInfo).length > 0
                ?
                <DetailView bannerArr={houseInfo.imgs} houseInfo={houseInfo} houseId={this.props.houseId}/>
                :
                <div>数据正在加载...</div>
            } 
            <CollectBuy history={this.props.history} houseId={this.props.houseId} />    
       </div>
       )
    }
}
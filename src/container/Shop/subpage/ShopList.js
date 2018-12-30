//商城页面求情数据
import React from 'react';
import {getShopData} from '../../../fetch/shop'
import LoadMore from '../../../components/LoadMore'
import ShopComponent from '../../../components/ShopComponent'
export default class ShopList extends React.Component{
    constructor(){
        super();
        this.state = {
            shopData:[],
            hasMore: false
        }
       
    }
    componentDidMount(){
        this.getShopData()
    }

    //加载更多函数
    loadMoreData(){
        this.getShopData()
    }

    //请求数据函数
    getShopData(){
        let result = getShopData();
        result.then((res) => {
            return res.json()
        })
            .then((data) => {
               this.setState({
                shopData:this.state.shopData.concat( data.data),
                hasMore: data.hasMore
               })
            })
    }
    render(){
        let {shopData,hasMore}= this.state
       return(  
       <div>
        {
           shopData.length > 0
           ?
           <ShopComponent shopData={shopData}/>
           :
           <div>数据正在加载...</div> 
        }
        {
            hasMore
            ?
            <LoadMore loadMoreData={this.loadMoreData.bind(this)}/>
            :
            <div>到底啦....</div>
        }
        </div>
       )
    }
}
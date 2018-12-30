
//购物车列表页面请求数据
import React from 'react';
import {getShopCarData} from '../../../fetch/shopCar'
import ShopCarListComponent from '../../../components/ShopCarListComponent'
export default class ShopCar extends React.Component{
   constructor(){
      super(); 
      this.state = {
         shopCarData: []
      }
   }
   componentDidMount(){
      var result = getShopCarData();
      result.then(res => {
         return res.json()
      })
            .then(data => {
               this.setState({
                  shopCarData: data
               })
            })
   }
    render(){
       return(
       <div>
          <ShopCarListComponent shopCarData={this.state.shopCarData}/>
       </div>
       )
    }
}
import React from 'react';
import OrderItem from './OrderItem'
export default class ShopCarListComponent extends React.Component{
    render(){
       const shopCarData = this.props.shopCarData
       return(
       <div>
         {
             shopCarData.map((element,index) => {
                return <OrderItem ItemData={element} key={index}/>
             })
         }
        </div>
       )
    }
}
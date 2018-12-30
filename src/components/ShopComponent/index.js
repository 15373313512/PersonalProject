import React from 'react';
import './style.less'
import ShopItem from './ShopItem'
export default class ShopComponent extends React.Component{
    render(){
        // console.log(this.props)
        let shopData = this.props.shopData
       return(
        <div className="list-container">
          {
              shopData.map((element,index) => {
                  return <ShopItem itemData={element} key={index}/>
              })
          }
        </div>
       )
    }
}
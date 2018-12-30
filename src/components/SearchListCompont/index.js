import React from 'react';
import SearchItem from './SearchItem/index'
import './style.less'
export default class SearchListCompont extends React.Component{
    render(){
      let searchData = this.props.searchData
       return(
        <div className="list-container">
          {
            searchData.map((element,index) => {
              return <SearchItem key={index} ItemData={element}/>
            })
          }
        </div>
       )
    }
}
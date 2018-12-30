//搜索页面
import React from 'react';
import SearchHeader from '../../components/SearchHeader/index'
import SearchList from './subpage/SearchList'

export default class Search extends React.Component{
    render(){
        var keywords = this.props.match.params.keywords
       return(
        <div>
            <SearchHeader history={this.props.history}/>
            <SearchList keywords={keywords}/>
        </div>
       )
    }
}



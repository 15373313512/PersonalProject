//搜索页面请求数据
import React from 'react';
import {getSearchData} from '../../../fetch/search'
import {withRouter} from "react-router-dom"
import {CITYNAME} from '../../../utils/config.js'
//组件关联redux
import {connect} from 'react-redux'
import SearchListCompont from '../../../components/SearchListCompont'
import LoadMore from '../../../components/LoadMore';
class SearchList extends React.Component{
    constructor(){
        super();
        this.state = {
            searchData: [],
            hasMore: false
        }
    }
    //搜索页面会通过用户输入的值进行无数次的搜索,所以将请求数据的函数封装起来
    componentDidUpdate(prevProps){
        // console.log(prevProps) {keywords:hahaah}
        const keywords = this.props.keywords

        //如果输入的值跟上次不同,则再次调用获取数据的函数
        if(prevProps.keywords !== keywords){
            this. getSearchData(keywords)   
        }
    }

    //从主页输入搜索内容在search页面渲染完成时请求数据
    componentDidMount(){
        const keywords = this.props.keywords
        //调用获取数据的函数
        this. getSearchData(keywords)   
    }


    //加载更多的函数(在这里加page参数)
    loadMoreData(){
        const keywords = this.props.keywords
        this.getSearchData(keywords) 
    }

    getSearchData(keywords){
        var cityName = localStorage.getItem(CITYNAME)

        //获取数据 
        var searchData = getSearchData(cityName,keywords);
        searchData.then((res) => {
            return res.json();
        })
        .then(data => {
            this.setState({
                searchData: this.state.searchData.concat(data.data),
                hasMore: data.hasMore
            })
        })
    }
    render(){
        let {searchData,hasMore}= this.state
       return(
       <div>
           {
               searchData.length > 0
               ?
               <SearchListCompont searchData={searchData}/>
               :
               <div>正在加载...</div>
              
           }
           {
                hasMore 
                ?
                <LoadMore loadMoreData={this.loadMoreData.bind(this)}/>
                :
                <div>到底啦...</div>
           }
        </div>
       )
    }
}

// -------------------redux部分----------------------------

//读取
function mapStateToProps(state){
    return {
        city: state.city
    }
 }
 
 //写入
 function mapDispatchToProps(dispatch){
    return {

    }
  }
 
 export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
 )(SearchList))